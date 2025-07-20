import type {
  OpenAPI3,
  ReferenceObject,
  OperationObject,
  ParameterObject,
  SchemaObject,
  ResponseObject,
  TypeInfo,
} from "./types";

export const toCamelCase = (s: string): string =>
  s.replace(/[-_](\w)/g, (_, char) => char.toUpperCase());

export const toPascalCase = (s: string): string => {
  const camel = toCamelCase(s);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
};

/**
 * @description Resolves a reference object to its definition within the OpenAPI spec
 *
 * @param spec The full OpenAPI specification
 * @param ref The object that might be a reference
 * @returns The resolved object, or the original object if it's not a valid reference
 */
export function resolveRef<T>(spec: OpenAPI3, ref: T | ReferenceObject): T {
  if (typeof ref !== "object" || ref === null) {
    return ref;
  }

  if (!ref || !("$ref" in ref)) {
    return ref as T;
  }

  const path = ref.$ref.replace("#/", "").split("/");

  /* eslint-disable @typescript-eslint/no-explicit-any */
  let current: any = spec;
  for (const segment of path) {
    if (typeof current !== "object" || current === null) {
      throw new Error(
        `Invalid reference path in spec: ${(ref as ReferenceObject).$ref}`,
      );
    }
    current = current[segment];
  }
  return current as T;
}

/**
 * @description Extracts a name for the 200 OK response type from an operation
 *
 * @param operation The OpenAPI operation object
 * @param spec The full OpenAPI spec
 * @returns The name of the response type, or 'unknown' if it truly cannot be determined
 */
export function getResponseType(
  operation: OperationObject,
  spec: OpenAPI3,
): string {
  const response = operation.responses?.["200"];
  if (!response) {
    return "unknown";
  }

  const resolvedResponse: ResponseObject =
    "$ref" in response ? resolveRef<ResponseObject>(spec, response) : response;

  const schema = resolvedResponse.content?.["application/json"]?.schema;
  if (!schema) {
    return "unknown";
  }

  if ("$ref" in schema) {
    return toPascalCase(schema.$ref.replace("#/components/schemas/", ""));
  }

  if (operation.tags && operation.tags.length > 0) {
    const name = operation.tags[0];
    return `${toPascalCase(name)}Response`;
  } else {
    throw new Error(`No tag in operation "${operation.operationId}".`);
  }
}

export function getParameterType(parameter: ParameterObject): TypeInfo {
  const { schema } = parameter;
  if (!schema) {
    return { name: "unknown", source: "primitive" };
  }

  const processSchema = (
    currentSchema: SchemaObject | ReferenceObject,
  ): TypeInfo => {
    if ("$ref" in currentSchema) {
      const typeName = toPascalCase(
        currentSchema.$ref.split("/").pop() || "unknown",
      );
      return { name: typeName, source: "generated" };
    }

    if (currentSchema.oneOf || currentSchema.anyOf) {
      const unionTypes = (currentSchema.oneOf || currentSchema.anyOf || []).map(
        (subSchema) => processSchema(subSchema).name,
      );
      return {
        name: [...new Set(unionTypes)].join(" | "),
        source: "mixed",
      };
    }

    if (currentSchema.enum) {
      const uniqueEnumValues = [...new Set(currentSchema.enum)];
      const typeName = uniqueEnumValues
        .map((val) => `"${String(val)}"`)
        .join(" | ");
      return { name: typeName, source: "primitive" };
    }

    switch (currentSchema.type) {
      case "array": {
        if (!currentSchema.items)
          return { name: "unknown[]", source: "primitive" };

        if (Array.isArray(currentSchema.items)) {
          const tupleTypes = currentSchema.items.map(
            (item) => processSchema(item).name,
          );
          return { name: `[${tupleTypes.join(", ")}]`, source: "mixed" };
        }

        if ("oneOf" in currentSchema.items || "anyOf" in currentSchema.items) {
          const itemUnionTypes = (
            currentSchema.items.oneOf ||
            currentSchema.items.anyOf ||
            []
          ).map((subSchema) => processSchema(subSchema).name);

          const itemType = [...new Set(itemUnionTypes)].join(" | ");

          return { name: `(${itemType})[]`, source: "mixed" };
        }

        const itemTypeInfo = processSchema(currentSchema.items);
        return { name: `${itemTypeInfo.name}[]`, source: itemTypeInfo.source };
      }
      case "string":
        return { name: "string", source: "primitive" };
      case "integer":
      case "number":
        return { name: "number", source: "primitive" };
      case "boolean":
        return { name: "boolean", source: "primitive" };
      default:
        return { name: "unknown", source: "primitive" };
    }
  };

  return processSchema(schema);
}

export function getParamNameFromPath(path: string): string | null {
  const match = path.match(/{(\w+)}/);
  return match ? match[1] : null;
}

export function getContextMethodName(paramName: string): string {
  return toCamelCase(`with_${paramName}`);
}

/**
 * Checks if a value is a non-null object
 * @param item The value to check
 * @returns True if the item is a non-null object, false otherwise
 */
function isObject(item: unknown): item is Record<string, unknown> {
  return !!item && typeof item === "object" && !Array.isArray(item);
}

/**
 * @description Recursively merges properties of one or more source objects into a target object
 *
 * It returns a new object and does not modify the original objects
 *
 * Arrays are not merged element by element but are replaced
 * @template T The type of the target objec
 * @template S The type of the source object
 * @param {T} target The object to merge into
 * @param {S} source The object to merge from
 * @returns {T & S} A new merged object
 */
export function deepMerge<T extends object, S extends object>(
  target: T,
  source: S,
): T & S {
  const output = { ...target } as T & S;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      const sourceValue = source[key as keyof S];
      const targetValue = output[key as keyof (T & S)];

      if (isObject(targetValue) && isObject(sourceValue)) {
        (output as Record<string, unknown>)[key] = deepMerge(
          targetValue,
          sourceValue,
        );
      } else {
        (output as Record<string, unknown>)[key] = sourceValue;
      }
    });
  }

  return output;
}
