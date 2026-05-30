import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  CompaniesResponse,
  CompanyApplicationsResponse,
  CompanyEmployeesResponse,
  CompanyEmployeesResponseBasic,
  CompanyId,
  CompanyLookupResponse,
  CompanyNewsCategory,
  CompanyProfileResponse,
  CompanyProfileResponseMixed,
  CompanyResponse,
  CompanySelectionName,
  CompanyStockResponse,
  NewsResponse,
  TimestampResponse,
} from "../models";

/**
 * Access the Company API endpoints
 * @category Endpoints
 */
export class CompanyEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get your company's applications
   * @param params - Optional query parameters
   */
  public async applications(params?: {
    timestamp?: string;
  }): Promise<CompanyApplicationsResponse> {
    const path = `/company/applications`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get my company's employees
   * @param params - Optional query parameters
   */
  public async employees(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<CompanyEmployeesResponse> {
    const path = `/company/employees`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your company's news details
   * @param params - Optional query parameters
   */
  public async news(params?: {
    striptags?: "true" | "false";
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    cat?: CompanyNewsCategory;
    timestamp?: string;
  }): Promise<PaginatedResponse<NewsResponse> & NewsResponse> {
    const path = `/company/news`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get my company's profile
   * @param params - Optional query parameters
   */
  public async profile(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<CompanyProfileResponseMixed> {
    const path = `/company/profile`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your company's stock
   * @param params - Optional query parameters
   */
  public async stock(params?: {
    timestamp?: string;
  }): Promise<CompanyStockResponse> {
    const path = `/company/stock`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * No summary available
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<CompanyLookupResponse> {
    const path = `/company/lookup`;
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
    const path = `/company/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Company selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: CompanySelectionName[];
    id?: CompanyId;
    legacy?: CompanySelectionName[];
    cat?: CompanyNewsCategory;
    limit?: number;
    striptags?: "true" | "false";
    offset?: number;
    timestamp?: string;
  }): Promise<CompanyResponse> {
    const path = `/company`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.legacy && { legacy: params.legacy.join(",") }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param id - The ID for this context */
  public withId(id: string | number): CompanyIdContext {
    return new CompanyIdContext(this.requester, id);
  }

  /** @param typeId - The ID for this context */
  public withTypeId(typeId: string | number): CompanyTypeIdContext {
    return new CompanyTypeIdContext(this.requester, typeId);
  }
}

/**
 * Context class for Company API endpoints that require a "id"
 * @category Endpoints
 */
export class CompanyIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get a company's employees
   * @param params - Optional query parameters
   */
  public async employees(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<CompanyEmployeesResponseBasic> {
    const path = `/company/${this.contextId}/employees`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a company's profile
   * @param params - Optional query parameters
   */
  public async profile(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<CompanyProfileResponse> {
    const path = `/company/${this.contextId}/profile`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Company API endpoints that require a "typeId"
 * @category Endpoints
 */
export class CompanyTypeIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get a list of companies for a specific company type
   * @param params - Optional query parameters
   */
  public async companies(params?: {
    limit?: number;
    offset?: number;
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<CompaniesResponse> & CompaniesResponse> {
    const path = `/company/${this.contextId}/companies`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
