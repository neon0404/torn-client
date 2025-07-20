import {
  UserEndpoint,
  FactionEndpoint,
  MarketEndpoint,
  TornEndpoint,
  PropertyEndpoint,
  KeyEndpoint,
  RacingEndpoint,
  ForumEndpoint,
} from "../generated";

import { RequestHandler, RequestHandlerOptions } from "./requester";
import type { Requester, RateLimitMode } from "./types";

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
}
