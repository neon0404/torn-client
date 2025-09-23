import fs from "fs-extra";
import path from "path";
import { Project } from "ts-morph";
import { MODELS_DIR } from "../config.ts";
import { toPascalCase, getResponseType, resolveRef } from "../utils.ts";
import type { OpenAPI3, SchemaObject, ReferenceObject } from "../types.ts";
import { PathItemObject } from "openapi-typescript/src/types.ts";

/**
 * @description Recursively transforms a Schema Object into a TypeScript type string
 * while collecting its dependencies
 * @param {SchemaObject | ReferenceObject} schema The schema object or a reference to it
 * @param {OpenAPI3} spec The full OpenAPI specification for resolving references
 * @param {Set<string>} dependencies A Set that will be mutated with the names of any found dependencies
 * @returns A string representing the TypeScript type
 */
function schemaToTypeString(
  schema: SchemaObject | ReferenceObject | Record<string, never>,
  spec: OpenAPI3,
  dependencies: Set<string>,
): string {
  if ("$ref" in schema) {
    const typeName = toPascalCase(
      schema.$ref.replace("#/components/schemas/", ""),
    );
    dependencies.add(typeName);
    return typeName;
  }

  if (schema.allOf) {
    return schema.allOf
      .map((s) => schemaToTypeString(s, spec, dependencies))
      .join(" & ");
  }
  if (schema.oneOf || schema.anyOf) {
    const types = (schema.oneOf || schema.anyOf || []).map((s) =>
      schemaToTypeString(s, spec, dependencies),
    );
    return [...new Set(types)].join(" | ");
  }

  switch (schema.type) {
    case "null":
      return "null";
    case "boolean":
      return "boolean";
    case "integer":
    case "number":
      return "number";
    case "string":
      if (schema.enum) {
        return schema.enum.map((val) => `"${val}"`).join(" | ");
      }
      return "string";
    case "array":
      if (!schema.items) {
        return "unknown[]";
      }
      if (Array.isArray(schema.items)) {
        const tupleTypes = schema.items.map((item) =>
          schemaToTypeString(item, spec, dependencies),
        );
        return `[${tupleTypes.join(", ")}]`;
      }
      return `${schemaToTypeString(schema.items, spec, dependencies)}[]`;
    case "object": {
      let objectString = "{\n";
      if (schema.properties) {
        for (const [propName, propSchema] of Object.entries(
          schema.properties,
        )) {
          const isRequired = schema.required?.includes(propName);
          const propType = schemaToTypeString(propSchema, spec, dependencies);
          objectString += `  "${propName}"${
            isRequired ? "" : "?"
          }: ${propType};\n`;
        }
      }
      if (schema.additionalProperties) {
        const additionalType =
          schema.additionalProperties === true
            ? "unknown"
            : schemaToTypeString(
                schema.additionalProperties,
                spec,
                dependencies,
              );
        objectString += `  [key: string]: ${additionalType};\n`;
      }
      if (objectString === "{\n") {
        return "Record<string, unknown>";
      }
      return objectString + "}";
    }
  }

  return "unknown";
}

/**
 * @description Generates individual TypeScript model files from OpenAPI schemas
 * @param {OpenAPI3} spec The OpenAPI3 specification object
 * @param {Project} project The ts-morph project instance
 */
export async function generateModels(
  spec: OpenAPI3,
  project: Project,
): Promise<void> {
  console.log("\n[2/5] Generating models");
  await fs.emptyDir(MODELS_DIR);

  const schemasToGenerate: Record<string, SchemaObject | ReferenceObject> = {
    ...(spec.components?.schemas ?? {}),
  };

  if (!spec.paths) throw new Error("No paths specified in OpenAPI spec");

  const httpMethods: (keyof PathItemObject)[] = [
    "get",
    "post",
    "put",
    "delete",
  ];

  for (const pathItem of Object.values(spec.paths)) {
    if (!pathItem || "$ref" in pathItem) {
      continue;
    }

    for (const method of httpMethods) {
      const operation = pathItem[method];
      if (!operation || !operation.responses?.["200"]) continue;

      const response = operation.responses["200"];
      const resolvedResponse =
        "$ref" in response ? resolveRef(spec, response) : response;
      const schema = resolvedResponse.content?.["application/json"]?.schema;

      if (schema && !("$ref" in schema)) {
        const generatedTypeName = getResponseType(operation, spec);
        if (
          generatedTypeName !== "unknown" &&
          !schemasToGenerate[generatedTypeName]
        ) {
          schemasToGenerate[generatedTypeName] = schema;
        }
      }
    }
  }

  const generatedModelNames: string[] = [];

  for (const [schemaName, schema] of Object.entries(schemasToGenerate)) {
    const typeName = toPascalCase(schemaName);
    const dependencies = new Set<string>();
    const typeDefinition = schemaToTypeString(schema, spec, dependencies);
    dependencies.delete(typeName);

    const filePath = path.join(MODELS_DIR, `${typeName}.ts`);
    const sourceFile = project.createSourceFile(filePath, "", {
      overwrite: true,
    });

    if (dependencies.size > 0) {
      sourceFile.addImportDeclaration({
        isTypeOnly: true,
        namedImports: [...dependencies].sort(),
        moduleSpecifier: ".",
      });
    }

    const typeDocs = [
      schema.description ? `${schema.description}` : "",
      "@category Models",
    ].filter(Boolean);

    sourceFile.addTypeAlias({
      name: typeName,
      type: typeDefinition,
      isExported: true,
      docs: [typeDocs.join("\n")],
    });
    generatedModelNames.push(typeName);
  }

  console.log(`[INFO] Generated ${generatedModelNames.length} model files`);
}
