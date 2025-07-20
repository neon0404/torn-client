import type { Requester } from "./types";

/**
 * Wraps a paginated API response, providing methods to navigate between pages
 *
 * The properties of the current page's data are directly accessible on instances of this class
 *
 * @template T The type of the data within the paginated response
 *
 * @category Core
 */
export class PaginatedResponse<T> {
  private readonly nextUrl: string | null;
  private readonly prevUrl: string | null;
  private readonly requester: Requester;

  constructor(
    data: T,
    nextUrl: string | null,
    prevUrl: string | null,
    requester: Requester,
  ) {
    Object.assign(this, data);

    this.nextUrl = nextUrl;
    this.prevUrl = prevUrl;
    this.requester = requester;
  }

  /**
   * Fetches a page of results from a given URL
   * @param url The full URL of the page to fetch
   * @returns A new combined response object if the page exists, otherwise null
   */
  private async fetchPage(
    url: string | null,
  ): Promise<(PaginatedResponse<T> & T) | null> {
    if (!url) {
      return null;
    }

    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname.substring(3);
    const params: Record<string, string> = {};
    for (const [key, value] of parsedUrl.searchParams.entries()) {
      params[key] = value;
    }

    return this.requester(path, params);
  }

  /**
   * Fetches the next page of results
   * @returns A promise that resolves to the next page, or null if there is no next page
   */
  public next(): Promise<(PaginatedResponse<T> & T) | null> {
    return this.fetchPage(this.nextUrl);
  }

  /**
   * Fetches the previous page of results
   * @returns A promise that resolves to the previous page, or null if there is no next page
   */
  public prev(): Promise<(PaginatedResponse<T> & T) | null> {
    return this.fetchPage(this.prevUrl);
  }
}
