import {
  UserEndpoint,
  FactionEndpoint,
  MarketEndpoint,
  TornEndpoint,
  PropertyEndpoint,
  KeyEndpoint,
  RacingEndpoint,
  ForumEndpoint,
  CompanyEndpoint,
} from "../generated";

import { RequestHandler, RequestHandlerOptions } from "./requester";
import type { Requester, RateLimitMode, RateLimitStatus } from "./types";

/**
 * Configuration options for the TornAPI client
 * @category Core
 */
export interface TornAPIOptions extends Omit<RequestHandlerOptions, "apiKeys"> {
  /**
   * An array of your Torn API keys. At least one key is required
   */
  apiKeys: string[];
}

/**
 * Main class
 *
 * Provides access to all API sections
 *
 * ## Example
 * ```
 * const client = new TornAPI({
 *   apiKeys: ["YOUR_API_KEY1", "YOUR_API_KEY2"],
 *   comment: "my-app",
 *   rateLimitMode: "autoDelay",
 *   verbose: true,
 * });
 *
 * const userProfile = await client.user.withId(12345).get();
 * ```
 * ## Configuration
 *
 * The `TornAPI` constructor accepts the following options:
 *
 * | Option | Type | Default | Description |
 * | :--- | :--- | :--- | :--- |
 * | `apiKeys` | `string[]` | **Required** | An array of one or more Torn API keys |
 * | `rateLimitMode` | `'autoDelay' │ 'throwOnLimit' │ 'ignore'` | `'autoDelay'` | How to handle the 100 requests/minute limit |
 * | `apiKeyBalancing` | `'roundRobin' │ 'random'` | `'roundRobin'` | Strategy for distributing requests across multiple keys |
 * | `comment` | `string` | `undefined` | A comment to include in the `comment` query parameter for your requests |
 * | `headers` | `Record<string, string>` | `{}` | Custom headers to send with each request |
 * | `verbose` | `boolean` | `false` | If `true`, logs all outgoing requests, responses, and rate limit events |
 * | `onRateLimit` | `(event: RateLimitEvent) => void` | `undefined` | Called when a request starts waiting for the rate limit and when it resumes (`autoDelay` only) |
 *
 * ## Core Concepts
 *
 * ### API Endpoints
 *
 * The client is organized by API categories:
 *
 * -   `client.user`
 * -   `client.faction`
 * -   `client.market`
 * -   `client.property`
 * -   `client.racing`
 * -   `client.forum`
 * -   `client.key`
 * -   `client.torn`
 * -   `client.company`
 *
 * ### Pagination
 *
 * Endpoints that return lists are paginated
 *
 * The response object is a special `PaginatedResponse` class that **always** includes `.next()` and `.prev()` methods to easily fetch adjacent pages
 *
 * If a page does not exist, these methods return `null`
 *
 * ### Rate Limiting
 *
 * -   **`autoDelay` (Default)**: Automatically queues requests to ensure you do not exceed the 100 req/min limit
 * -   **`throwOnLimit`**: Throws a `TornRateLimitError` if a request would exceed the limit
 * -   **`ignore`**: Disables rate limiting. Not recommended unless you have your own external limiter
 *
 * ### Observing rate limiting
 *
 * In `autoDelay` mode a request over the limit silently waits, up to a minute.
 * Pass `onRateLimit` to find out when that happens, e.g. to render a countdown:
 *
 * ```
 * let timer: ReturnType<typeof setInterval> | undefined;
 *
 * const client = new TornAPI({
 *   apiKeys: ["YOUR_API_KEY"],
 *   // Re-render on every event; the status tells us what is still waiting
 *   onRateLimit: () => {
 *     clearInterval(timer);
 *     render();
 *     timer = setInterval(render, 1000);
 *   },
 * });
 *
 * function render() {
 *   const { waiting, resumeAt } = client.getRateLimitStatus();
 *   if (resumeAt === null) {
 *     clearInterval(timer);
 *     return showStatus(""); // nothing is waiting anymore
 *   }
 *   const seconds = Math.ceil(Math.max(0, resumeAt - Date.now()) / 1000);
 *   showStatus(`Waiting ${seconds}s for rate limit (${waiting} queued)`);
 * }
 * ```
 *
 * `waiting` events repeat whenever a request has to wait again (another request took the freed slot),
 * each with a fresh `resumeAt`. `getRateLimitStatus()` returns the same information on demand
 *
 * @category Core
 */
export class TornAPI {
  public readonly user: UserEndpoint;
  public readonly faction: FactionEndpoint;
  public readonly market: MarketEndpoint;
  public readonly property: PropertyEndpoint;
  public readonly racing: RacingEndpoint;
  public readonly forum: ForumEndpoint;
  public readonly key: KeyEndpoint;
  public readonly torn: TornEndpoint;
  public readonly company: CompanyEndpoint;

  public readonly rateLimitMode: RateLimitMode;
  private readonly requestHandler: RequestHandler;

  /**
   * Creates an instance of the TornAPI client
   * @param {TornAPIOptions} options - Configuration options for the client
   */
  constructor(options: TornAPIOptions) {
    if (!options.apiKeys || options.apiKeys.length === 0) {
      throw new Error(
        "At least one API key is required to initialize the client.",
      );
    }

    this.rateLimitMode = options.rateLimitMode ?? "autoDelay";
    this.requestHandler = new RequestHandler(options);
    const requester: Requester = this.requestHandler.requester;

    this.user = new UserEndpoint(requester);
    this.faction = new FactionEndpoint(requester);
    this.market = new MarketEndpoint(requester);
    this.property = new PropertyEndpoint(requester);
    this.racing = new RacingEndpoint(requester);
    this.forum = new ForumEndpoint(requester);
    this.torn = new TornEndpoint(requester);
    this.key = new KeyEndpoint(requester);
    this.company = new CompanyEndpoint(requester);
  }

  /**
   * Returns real-time rate limit information for each API key
   * and values contain usage details
   */
  public getRateLimitInfo(): Record<
    string,
    { used: number; remaining: number; resetInMs: number }
  > {
    return this.requestHandler.getRateLimitInfo();
  }

  /**
   * Returns how many requests are currently held back by the client-side rate limiter
   * and the earliest time one of them will try again (`null` if nothing is waiting)
   *
   * Useful for polling; use the `onRateLimit` option to be notified instead
   * `waiting` is always 0 outside `autoDelay` mode
   */
  public getRateLimitStatus(): RateLimitStatus {
    return this.requestHandler.getRateLimitStatus();
  }
}
