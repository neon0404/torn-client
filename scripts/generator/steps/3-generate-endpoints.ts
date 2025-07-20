import fs from "fs-extra";
import path from "path";
import {
  Project,
  Scope,
  ClassDeclaration,
  MethodDeclarationStructure,
  OptionalKind,
} from "ts-morph";
import { ENDPOINTS_DIR } from "../config.ts";
import {
  getParameterType,
  getParamNameFromPath,
  getResponseType,
  resolveRef,
  toCamelCase,
  toPascalCase,
  getContextMethodName,
} from "../utils.ts";
import type {
  OpenAPI3,
  PathItemObject,
  MethodDefinition,
  ParameterObject,
  TypeInfo,
} from "../types.ts";
import { ObjectSubtype } from "openapi-typescript";

function isResponseTypePaginated(
  spec: OpenAPI3,
  responseTypeName: string,
): boolean {
  if (!responseTypeName || responseTypeName === "unknown") {
    return false;
  }
  const schemaRef = `#/components/schemas/${responseTypeName}`;
  const schema = resolveRef<ObjectSubtype>(spec, { $ref: schemaRef });
  return !!schema?.properties?._metadata;
}

function determineMethodName(tag: string, pathName: string): string {
  const toCamelCase = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/([-_][a-z])/g, (group) =>
        group.toUpperCase().replace("-", "").replace("_", ""),
      );
  };
  const pathSegments = pathName
    .split("/")
    .filter((p) => p && !p.startsWith("{"));
  if (
    pathSegments.length === 2 &&
    pathSegments[0].toLowerCase() === pathSegments[1].toLowerCase()
  ) {
    return "get";
  }
  const methodNameParts = [...pathSegments];
  if (
    methodNameParts.length > 0 &&
    methodNameParts[0].toLowerCase() === tag.toLowerCase()
  ) {
    methodNameParts.shift();
  }
  if (methodNameParts.length === 0) {
    return "get";
  }
  return toCamelCase(methodNameParts.join("_"));
}

function processPathItem(
  spec: OpenAPI3,
  pathName: string,
  pathItem: PathItemObject,
): {
  method: MethodDefinition;
  tag: string;
} | null {
  const operation = pathItem.get;
  if (!operation || "$ref" in operation) return null;
  const tag = operation.tags?.[0] || "other";
  const methodName = determineMethodName(tag, pathName);
  const allParameters = (operation.parameters ?? []).map((p) =>
    "$ref" in p ? resolveRef<ParameterObject>(spec, p) : p,
  );
  const contextParamName = getParamNameFromPath(pathName);
  const pathParameters = allParameters.filter(
    (p) => p.in === "path" && p.name !== contextParamName,
  );
  const queryParameters = allParameters.filter(
    (p) => p.in === "query" && p.name !== "key" && p.name !== "comment",
  );
  const responseType = getResponseType(operation, spec);
  const paginated = isResponseTypePaginated(spec, responseType);

  return {
    method: {
      name: methodName,
      summary: operation.summary,
      path: pathName,
      pathParameters,
      queryParameters,
      responseType: responseType,
      isPaginated: paginated,
      contextParamName: contextParamName,
    },
    tag,
  };
}

export function groupEndpointsByTagAndContext(
  spec: OpenAPI3,
): Record<string, Record<string, MethodDefinition[]>> {
  const result: Record<string, Record<string, MethodDefinition[]>> = {};
  for (const [pathName, pathItem] of Object.entries(spec.paths ?? {})) {
    if (!pathItem || "$ref" in pathItem) continue;
    const processed = processPathItem(spec, pathName, pathItem);
    if (!processed) continue;
    const { method, tag } = processed;
    const contextKey = method.contextParamName ?? "global";
    if (!result[tag]) {
      result[tag] = {};
    }
    if (!result[tag][contextKey]) {
      result[tag][contextKey] = [];
    }
    result[tag][contextKey].push(method);
  }
  return result;
}

/**
 * A robust function to recursively find all generated model names within a complex type string
 * @param {TypeInfo} typeInfo - The type information object from getParameterType
 * @param {Set<string>} collection - The Set to add found model names to
 */
function collectGeneratedTypes(
  typeInfo: TypeInfo,
  collection: Set<string>,
): void {
  if (typeInfo.source === "generated") {
    const baseTypeName = typeInfo.name.replace(/\[\]$/, "");
    collection.add(baseTypeName);
    return;
  }

  if (typeInfo.source === "mixed") {
    const types = typeInfo.name.replace(/[()[\]]/g, "").split(" | ");
    for (const type of types) {
      const trimmedType = type.trim();
      const isPrimitive = [
        "string",
        "number",
        "boolean",
        "any",
        "unknown",
      ].includes(trimmedType);
      const isLiteral =
        trimmedType.startsWith('"') || trimmedType.startsWith("'");
      const isModel =
        !isPrimitive &&
        !isLiteral &&
        trimmedType.charAt(0) === trimmedType.charAt(0).toUpperCase();

      if (isModel) {
        collection.add(trimmedType);
      }
    }
  }
}

/**
 * @description Generates endpoint classes from the OpenAPI specification
 * @param {OpenAPI3} spec The OpenAPI3 specification object
 * @param {Project} project The ts-morph project instance
 */
export async function generateEndpoints(
  spec: OpenAPI3,
  project: Project,
): Promise<void> {
  console.log("\n[3/5] Generating endpoint classes");
  await fs.ensureDir(ENDPOINTS_DIR);

  const endpointsByTag = groupEndpointsByTagAndContext(spec);

  for (const tag in endpointsByTag) {
    const contexts = endpointsByTag[tag];
    const mainClassName = `${toPascalCase(tag)}Endpoint`;
    const fileName = tag.toLowerCase();
    const filePath = path.join(ENDPOINTS_DIR, `${fileName}.ts`);
    const sourceFile = project.createSourceFile(filePath, "", {
      overwrite: true,
    });

    const allMethods = Object.values(contexts).flat();
    const generatedTypes = new Set<string>();
    let isPaginated = false;

    for (const method of allMethods) {
      if (method.isPaginated) {
        isPaginated = true;
      }
      if (method.responseType !== "unknown") {
        generatedTypes.add(method.responseType);
      }

      for (const p of [...method.pathParameters, ...method.queryParameters]) {
        const typeInfo = getParameterType(p);
        collectGeneratedTypes(typeInfo, generatedTypes);
      }
    }

    sourceFile.addImportDeclarations([
      {
        isTypeOnly: true,
        namedImports: ["Requester"],
        moduleSpecifier: "../../client/types",
      },
    ]);

    if (isPaginated) {
      sourceFile.addImportDeclaration({
        namedImports: ["PaginatedResponse"],
        moduleSpecifier: "../../client/paginated",
      });
    }

    if (generatedTypes.size > 0) {
      sourceFile.addImportDeclaration({
        isTypeOnly: true,
        namedImports: [...generatedTypes].sort(),
        moduleSpecifier: "../models",
      });
    }

    const mainEndpointClass = sourceFile.addClass({
      name: mainClassName,
      isExported: true,
      docs: [`Access the ${tag} API endpoints\n@category Endpoints`],
    });

    mainEndpointClass.addProperty({
      name: "requester",
      isReadonly: true,
      scope: Scope.Private,
      type: "Requester",
    });

    mainEndpointClass
      .addConstructor({
        parameters: [{ name: "requester", type: "Requester" }],
      })
      .setBodyText("this.requester = requester;");

    for (const contextName in contexts) {
      const methods = contexts[contextName];
      let targetClass: ClassDeclaration;

      if (contextName === "global") {
        targetClass = mainEndpointClass;
      } else {
        const contextClassName = `${toPascalCase(tag)}${toPascalCase(contextName)}Context`;
        const withMethodName = getContextMethodName(contextName);

        const contextClass = sourceFile.addClass({
          name: contextClassName,
          isExported: true,
          docs: [
            `Context class for ${tag} API endpoints that require a "${contextName}"\n@category Endpoints`,
          ],
        });

        contextClass.addProperty({
          name: "requester",
          isReadonly: true,
          scope: Scope.Private,
          type: "Requester",
        });
        contextClass.addProperty({
          name: "contextId",
          isReadonly: true,
          scope: Scope.Private,
          type: "string | number",
        });
        contextClass
          .addConstructor({
            parameters: [
              { name: "requester", type: "Requester" },
              { name: "contextId", type: "string | number" },
            ],
          })
          .setBodyText(
            "this.requester = requester;\nthis.contextId = contextId;",
          );

        targetClass = contextClass;

        const withMethod = mainEndpointClass.addMethod({
          name: withMethodName,
          scope: Scope.Public,
          parameters: [{ name: contextName, type: "string | number" }],
          returnType: contextClassName,
          docs: [`@param ${contextName} - The ID for this context`],
        });
        withMethod.setBodyText(
          `return new ${contextClassName}(this.requester, ${contextName});`,
        );
      }

      for (const method of methods) {
        const methodStructure: OptionalKind<MethodDeclarationStructure> = {
          name: method.name,
          scope: Scope.Public,
          isAsync: true,
        };

        const pathParamDocs = method.pathParameters
          .map(
            (p) =>
              `@param ${toCamelCase(p.name)} - Path parameter: ${
                p.description || p.name
              }`,
          )
          .join("\n");
        const queryDoc =
          method.queryParameters.length > 0
            ? `@param params - Optional query parameters`
            : "";

        methodStructure.docs = [
          [method.summary || "No summary available", pathParamDocs, queryDoc]
            .filter(Boolean)
            .join("\n"),
        ];

        method.pathParameters.forEach((p) => {
          (methodStructure.parameters ??= []).push({
            name: toCamelCase(p.name),
            type: "string | number",
          });
        });

        if (method.queryParameters.length > 0) {
          const queryDefinitions = method.queryParameters
            .map((p) => {
              const typeInfo = getParameterType(p);
              return `${toCamelCase(p.name)}?: ${typeInfo.name}`;
            })
            .join("; ");
          (methodStructure.parameters ??= []).push({
            name: "params",
            type: `{ ${queryDefinitions} }`,
            hasQuestionToken: true,
          });
        }

        const returnType = method.isPaginated
          ? `PaginatedResponse<${method.responseType}> & ${method.responseType}`
          : method.responseType;
        methodStructure.returnType = `Promise<${returnType}>`;

        const pathInterpolation = method.path.replace(/{(\w+)}/g, (_, p) =>
          p === method.contextParamName
            ? `\${this.contextId}`
            : `\${${toCamelCase(p)}}`,
        );

        const queryParamsLogic = method.queryParameters
          .map((p) => {
            const camelName = toCamelCase(p.name);
            return p.schema?.type === "array"
              ? `...(params?.${camelName} && { ${p.name}: params.${camelName}.join(',') })`
              : `...(params?.${camelName} !== undefined && { ${p.name}: params.${camelName} })`;
          })
          .join(", ");

        const bodyText =
          `const path = \`${pathInterpolation}\`;\n` +
          `const query = { ${queryParamsLogic} };\n` +
          `return this.requester(path, query);`;

        targetClass.addMethod(methodStructure).setBodyText(bodyText);
      }
    }
    console.log(`[INFO] Created ${mainClassName} in ${fileName}.ts`);
  }
}
