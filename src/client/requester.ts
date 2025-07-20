import { TornApiError, TornRateLimitError } from "./errors";
import { PaginatedResponse } from "./paginated";
import type { Requester, RateLimitMode, ApiKeyBalancing } from "./types";

/**
 * Checks if an unknown value is an instance of the Error class
 * @param {unknown} error - The value to check
 * @returns {boolean} True if the value is an Error, false otherwise
 */
const isError = (error: unknown): error is Error => error instanceof Error;

/**
 * Type definition for the raw error structure returned by the Torn API
 */
type ApiErrorPayload = {
  error: {
    code: number;
    error: string;
  };
};

/**
 * Type guard to determine if a given response object is a Torn API error
 * @param {unknown} data - The response data to check
 * @returns {boolean} True if the data matches the TornApiError structure
 */
const isApiError = (data: unknown): data is ApiErrorPayload => {
  return (
    typeof data === "object" &&
    data !== null &&
    "error" in data &&
    typeof (data as { error: unknown }).error === "object" &&
    (data as { error: object | null }).error !== null &&
    "code" in (data as { error: { code: unknown } }).error &&
    "error" in (data as { error: { error: unknown } }).error
  );
};

/**
 * Type definition for the raw paginated response structure from the Torn API,
 * which contains metadata for navigation
 */
type ApiPaginatedResponse = {
  _metadata: {
    links: {
      next: string | null;
      prev: string | null;
    };
  };
};

/**
 * Type guard to determine if a given response object is a paginated response
 * @param {unknown} data - The response data to check
 * @returns {boolean} True if the data matches the paginated response structure
 */
const isApiPaginatedResponse = (
  data: unknown,
): data is ApiPaginatedResponse => {
  return (
    typeof data === "object" &&
    data !== null &&
    "_metadata" in data &&
    typeof (data as { _metadata: unknown })._metadata === "object" &&
    (data as { _metadata: object | null })._metadata !== null &&
    "links" in (data as { _metadata: { links: unknown } })._metadata
  );
};

/**
 * Defines the configuration options for the RequestHandler
 * @category Core
 */
export interface RequestHandlerOptions {
  /** An array of one or more Torn API keys */
  apiKeys: string[];
  /** Strategy for handling the 100 requests/minute rate limit. Defaults to 'autoDelay' */
  rateLimitMode?: RateLimitMode;
  /** A comment to include with every API request */
  comment?: string;
  /** Custom headers to send with every request */
  headers?: Record<string, string>;
  /** The base URL for the Torn API. Defaults to the official v2 URL */
  apiUrl?: string;
  /** The strategy for balancing requests across multiple API keys. Defaults to 'roundRobin' */
  apiKeyBalancing?: ApiKeyBalancing;
  /** If true, logs detailed information about requests, responses, and rate limiting to the console */
  verbose?: boolean;
}

/**
 * Manages the entire lifecycle of an API request, including rate limiting, key balancing,
 * authentication and error handling
 */
export class RequestHandler {
  private readonly apiKeys: string[];
  private readonly rateLimitMode: RateLimitMode;
  private readonly comment: string | undefined;
  private readonly headers: Record<string, string>;
  private readonly apiUrl: string;
  private readonly apiKeyBalancing: ApiKeyBalancing;
  private readonly verbose: boolean;
  private apiKeyIndex = 0;
  private readonly requestTimestamps: Map<string, number[]> = new Map();

  constructor(options: RequestHandlerOptions) {
    if (!options.apiKeys || options.apiKeys.length === 0) {
      throw new Error("At least one API key must be provided.");
    }
    this.apiKeys = options.apiKeys;
    this.rateLimitMode = options.rateLimitMode ?? "autoDelay";
    this.comment = options.comment;
    this.headers = options.headers ?? {};
    this.apiUrl = options.apiUrl ?? "https://api.torn.com/v2";
    this.apiKeyBalancing = options.apiKeyBalancing ?? "roundRobin";
    this.verbose = !!options.verbose;

    for (const key of this.apiKeys) {
      this.requestTimestamps.set(key, []);
    }
  }

  /**
   * Logs messages to the console if verbose mode is enabled
   * @param {...unknown[]} args - The messages or objects to log
   */
  private log(...args: unknown[]) {
    if (this.verbose) {
      console.log("[TornClient]", ...args);
    }
  }

  /**
   * The core requester function, bound to the class instance
   * This is passed to endpoint classes to make their API calls
   */
  public readonly requester: Requester = this.makeRequest.bind(this);

  /**
   * Checks if a specific API key is within its rate limit and can be used immediately
   *
   * Prunes timestamps older than one minute from the tracking array
   * @param {string} apiKey - The API key to check
   * @returns {boolean} True if the key is available for use, otherwise false
   */
  private isKeyAvailable(apiKey: string): boolean {
    if (this.rateLimitMode === "ignore") {
      return true;
    }
    const now = Date.now();
    const oneMinuteAgo = now - 60_000;
    const timestamps = (this.requestTimestamps.get(apiKey) ?? []).filter(
      (ts) => ts > oneMinuteAgo,
    );
    this.requestTimestamps.set(apiKey, timestamps);
    return timestamps.length < 100;
  }

  /**
   * Finds the next available API key
   * @returns {string | null} An available API key, or null if all keys are currently rate-limited
   */
  private findAvailableKey(): string | null {
    for (let i = 0; i < this.apiKeys.length; i++) {
      const key = this.getApiKey();
      if (this.isKeyAvailable(key)) {
        return key;
      }
    }
    return null;
  }

  /**
   * Calculates the minimum time to wait until any key in the pool becomes available again
   * @returns {number} The minimum wait time in milliseconds
   */
  private getMinWaitTime(): number {
    const now = Date.now();
    let minWaitTime = 60_100;

    for (const key of this.apiKeys) {
      const timestamps = this.requestTimestamps.get(key) ?? [];
      if (timestamps.length >= 100) {
        const oldestRequestTimestamp = timestamps[0];
        const keyWaitTime = 60_000 - (now - oldestRequestTimestamp) + 100;
        if (keyWaitTime < minWaitTime) {
          minWaitTime = keyWaitTime;
        }
      }
    }
    return Math.max(0, minWaitTime);
  }

  /**
   * Retrieves the next API key based on the configured balancing strategy
   *
   * This method handles the selection logic (`roundRobin` or `random`)
   * and does not check for rate limits
   * @returns {string} The selected API key
   */
  private getApiKey(): string {
    if (this.apiKeys.length === 1) {
      return this.apiKeys[0];
    }
    if (this.apiKeyBalancing === "random") {
      const idx = Math.floor(Math.random() * this.apiKeys.length);
      return this.apiKeys[idx];
    }
    const key = this.apiKeys[this.apiKeyIndex];
    this.apiKeyIndex = (this.apiKeyIndex + 1) % this.apiKeys.length;
    return key;
  }

  /**
   * The core method for executing a single API request
   *
   * It handles key selection, rate limiting, request creation, middleware, and response parsing
   * @template T - The expected type of the successful response data
   * @param {string} path - The API endpoint path (e.g., "/user/1234")
   * @param {Record<string, unknown>} query - The query parameters for the request
   * @returns {Promise<T>} A promise that resolves with the fetched data
   */
  private async makeRequest<T = unknown>(
    path: string,
    query: Record<string, unknown>,
  ): Promise<T> {
    this.log("Request received:", path, query);

    let apiKey = this.findAvailableKey();

    if (!apiKey) {
      if (this.rateLimitMode === "autoDelay") {
        const waitTime = this.getMinWaitTime();
        this.log(`All keys are on cooldown. Delaying for ${waitTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        apiKey = this.findAvailableKey();
      }

      if (!apiKey) {
        const error = new TornRateLimitError(
          "Rate limit of 100 requests/minute exceeded for all available keys",
        );
        this.log("Rate limit exceeded for all keys");
        throw error;
      }
    }

    this.log(`Using API key: ${apiKey.slice(0, 5)}...`);

    const url = new URL(`${this.apiUrl}${path}`);
    for (const [key, value] of Object.entries(query)) {
      if (
        value !== undefined &&
        value !== null &&
        key !== "key" &&
        key !== "comment"
      ) {
        url.searchParams.set(key, String(value));
      }
    }
    if (this.comment) url.searchParams.set("comment", this.comment);

    const requestOptions: RequestInit = {
      headers: {
        Accept: "application/json",
        Authorization: `ApiKey ${apiKey}`,
        ...this.headers,
      },
    };

    try {
      this.log("Fetching:", url.toString());
      const response = await fetch(url.toString(), requestOptions);

      if (this.rateLimitMode !== "ignore") {
        const timestamps = this.requestTimestamps.get(apiKey) ?? [];
        timestamps.push(Date.now());
        this.requestTimestamps.set(apiKey, timestamps);
      }

      if (!response.ok) {
        throw new Error(
          `Request failed with status ${response.status}: ${response.statusText}`,
        );
      }

      const data: unknown = await response.json();

      if (isApiError(data)) {
        throw new TornApiError(data.error);
      }

      let resultData: T;

      if (isApiPaginatedResponse(data)) {
        resultData = new PaginatedResponse<T>(
          data as T,
          data._metadata.links.next,
          data._metadata.links.prev,
          this.requester,
        ) as unknown as T;
      } else {
        resultData = data as T;
      }

      this.log("Response data:", resultData);

      return resultData;
    } catch (error) {
      const err = isError(error)
        ? error
        : new Error("An unknown error occurred");
      this.log("Request failed:", err.message);

      throw err;
    }
  }

  /**
   * Returns real-time rate limit information for each API key
   * @returns {Record<string, { used: number; remaining: number; resetInMs: number }>} An object where keys are partial API keys
   * and values contain usage details
   */
  public getRateLimitInfo(): Record<
    string,
    { used: number; remaining: number; resetInMs: number }
  > {
    const now = Date.now();
    const oneMinuteAgo = now - 60_000;
    const info: Record<
      string,
      { used: number; remaining: number; resetInMs: number }
    > = {};

    for (const key of this.apiKeys) {
      const timestamps = (this.requestTimestamps.get(key) ?? []).filter(
        (ts) => ts > oneMinuteAgo,
      );
      const used = timestamps.length;
      const remaining = Math.max(0, 100 - used);
      const oldestRequest = timestamps[0] ?? null;
      const resetInMs = oldestRequest
        ? Math.max(0, 60_000 - (now - oldestRequest))
        : 0;

      info[key.slice(0, 5)] = {
        used,
        remaining,
        resetInMs,
      };
    }
    return info;
  }
}
