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

/**
 * Emitted through the `onRateLimit` option while requests are held back by the
 * client-side rate limiter (`autoDelay` mode only)
 *
 * - `waiting`: a request found every key at its 100 requests/minute limit and is about to sleep.
 *   Emitted each time a request (re-)enters the delay loop, so a request that wakes up and loses
 *   the freed slot to another one emits `waiting` again with a new `resumeAt`
 * - `resumed`: a request that had been waiting got a key and is being sent
 *
 * Events never contain API keys
 *
 * @category Core
 */
export type RateLimitEvent =
  | {
      type: "waiting";
      /** How long this request will sleep before trying again, in milliseconds */
      waitMs: number;
      /** When this request will try again, as a Unix timestamp in milliseconds (`Date.now() + waitMs`) */
      resumeAt: number;
      /** Number of requests currently waiting, including this one */
      queued: number;
    }
  | {
      type: "resumed";
      /** Total time this request spent waiting, in milliseconds */
      waitedMs: number;
      /** Number of requests still waiting after this one resumed */
      queued: number;
    };

/**
 * Callback that receives {@link RateLimitEvent}s
 *
 * It is called synchronously from inside the request; errors it throws
 * (or rejections, if it returns a promise) are caught and never affect the request
 *
 * @category Core
 */
export type RateLimitListener = (event: RateLimitEvent) => void;

/**
 * Snapshot of requests currently held back by the client-side rate limiter
 *
 * @category Core
 */
export interface RateLimitStatus {
  /** Number of requests currently waiting for a free key. Always 0 outside `autoDelay` mode */
  waiting: number;
  /** Earliest time a waiting request will try again (Unix timestamp in milliseconds), or `null` if nothing is waiting */
  resumeAt: number | null;
}
