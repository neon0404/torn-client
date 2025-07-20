/**
 * Defines the rate limit handling strategy for API requests
 *
 * @category Core
 */
export type RateLimitMode = "autoDelay" | "throwOnLimit" | "ignore";

/**
 * Defines the algorithm for distributing requests across multiple API keys
 *
 * @category Core
 */
export type ApiKeyBalancing = "roundRobin" | "random";

/**
 * Core function for making API requests
 * It's generic, allowing the caller to specify the expected return type
 *
 * @template T The expected type of the response data
 * @param path The API endpoint path (e.g., "/user/profile")
 * @param params The query parameters for the request
 * @returns A Promise that resolves to the response data of type T
 *
 * @category Core
 */
export type Requester = <T = unknown>(
  path: string,
  params: Record<string, unknown>,
) => Promise<T>;
