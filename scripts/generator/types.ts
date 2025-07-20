import type {
  OpenAPI3,
  PathItemObject,
  OperationObject,
  ParameterObject,
  ReferenceObject,
  SchemaObject,
  ResponseObject,
} from "openapi-typescript/src/types.ts";

export type {
  OpenAPI3,
  PathItemObject,
  OperationObject,
  ParameterObject,
  ReferenceObject,
  SchemaObject,
  ResponseObject,
};

export type MethodDefinition = {
  name: string;
  summary?: string;
  path: string;
  pathParameters: ParameterObject[];
  queryParameters: ParameterObject[];
  responseType: string;
  isPaginated: boolean;
  contextParamName: string | null;
};

export type TypeInfo = {
  name: string;
  source: "generated" | "mixed" | "primitive";
};

/**
 * @description Defines the structure for query parameters in a test configuration
 */
export type TestDataMethodParams = {
  queryParams?: Record<string, unknown>;
  [key: string]: unknown;
};

/**
 * @description Represents the test configuration for a specific API tag
 *
 * It can hold a primary context ID (e.g., 'id') and configurations for specific methods
 */
export type TestTagConfig = Record<string, TestDataMethodParams>;

/**
 * @description Defines the structure of the test data configuration file
 *
 * The keys are the lowercase tags of the API endpoints
 */
export type TestDataConfig = Record<string, TestTagConfig>;
