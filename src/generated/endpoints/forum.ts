import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  ForumCategoriesResponse,
  ForumId,
  ForumLookupResponse,
  ForumPostsResponse,
  ForumResponse,
  ForumSelectionName,
  ForumThreadId,
  ForumThreadResponse,
  ForumThreadsResponse,
  TimestampResponse,
} from "../models";

/**
 * Access the Forum API endpoints
 * @category Endpoints
 */
export class ForumEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get publicly available forum categories
   * @param params - Optional query parameters
   */
  public async categories(params?: {
    timestamp?: string;
  }): Promise<ForumCategoriesResponse> {
    const path = `/forum/categories`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get threads across all forum categories
   * @param params - Optional query parameters
   */
  public async threads(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<PaginatedResponse<ForumThreadsResponse> & ForumThreadsResponse> {
    const path = `/forum/threads`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all available forum selections
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<ForumLookupResponse> {
    const path = `/forum/lookup`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get current server time
   * @param params - Optional query parameters
   */
  public async timestamp(params?: {
    timestamp?: string;
  }): Promise<TimestampResponse> {
    const path = `/forum/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Forum selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: ForumSelectionName[];
    id?: ForumThreadId | ForumId[];
    striptags?: "true" | "false";
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    offset?: number;
    timestamp?: string;
  }): Promise<ForumResponse> {
    const path = `/forum`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param threadId - The ID for this context */
  public withThreadId(threadId: string | number): ForumThreadIdContext {
    return new ForumThreadIdContext(this.requester, threadId);
  }

  /** @param categoryIds - The ID for this context */
  public withCategoryIds(
    categoryIds: string | number,
  ): ForumCategoryIdsContext {
    return new ForumCategoryIdsContext(this.requester, categoryIds);
  }
}

/**
 * Context class for Forum API endpoints that require a "threadId"
 * @category Endpoints
 */
export class ForumThreadIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get specific forum thread posts
   * @param params - Optional query parameters
   */
  public async posts(params?: {
    offset?: number;
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<ForumPostsResponse> & ForumPostsResponse> {
    const path = `/forum/${this.contextId}/posts`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get specific thread details
   * @param params - Optional query parameters
   */
  public async thread(params?: {
    timestamp?: string;
  }): Promise<ForumThreadResponse> {
    const path = `/forum/${this.contextId}/thread`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Forum API endpoints that require a "categoryIds"
 * @category Endpoints
 */
export class ForumCategoryIdsContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get threads for specific public forum category or categories
   * @param params - Optional query parameters
   */
  public async threads(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<PaginatedResponse<ForumThreadsResponse> & ForumThreadsResponse> {
    const path = `/forum/${this.contextId}/threads`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
