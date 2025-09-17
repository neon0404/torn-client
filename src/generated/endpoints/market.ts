import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  BazaarResponse,
  BazaarResponseSpecialized,
  ItemId,
  MarketItemMarketResponse,
  MarketLookupResponse,
  MarketPropertiesResponse,
  MarketRentalsResponse,
  MarketResponse,
  MarketSelectionName,
  MarketSpecializedBazaarCategoryEnum,
  PropertyTypeId,
  TimestampResponse,
  WeaponBonusEnum,
} from "../models";

/**
 * Access the Market API endpoints
 * @category Endpoints
 */
export class MarketEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get bazaar directory
   * @param params - Optional query parameters
   */
  public async bazaar(params?: {
    cat?: MarketSpecializedBazaarCategoryEnum;
    timestamp?: string;
  }): Promise<BazaarResponse> {
    const path = `/market/bazaar`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all available market selections
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<MarketLookupResponse> {
    const path = `/market/lookup`;
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
    const path = `/market/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Market selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: MarketSelectionName[];
    id?: ItemId | PropertyTypeId;
    legacy?: MarketSelectionName[];
    cat?: MarketSpecializedBazaarCategoryEnum;
    bonus?: WeaponBonusEnum;
    sort?: "DESC" | "ASC";
    offset?: number;
    limit?: number;
    timestamp?: string;
  }): Promise<MarketResponse> {
    const path = `/market`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.legacy && { legacy: params.legacy.join(",") }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.bonus !== undefined && { bonus: params.bonus }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param id - The ID for this context */
  public withId(id: string | number): MarketIdContext {
    return new MarketIdContext(this.requester, id);
  }

  /** @param propertyTypeId - The ID for this context */
  public withPropertyTypeId(
    propertyTypeId: string | number,
  ): MarketPropertyTypeIdContext {
    return new MarketPropertyTypeIdContext(this.requester, propertyTypeId);
  }
}

/**
 * Context class for Market API endpoints that require a "id"
 * @category Endpoints
 */
export class MarketIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get item specialized bazaar directory
   * @param params - Optional query parameters
   */
  public async bazaar(params?: {
    timestamp?: string;
  }): Promise<BazaarResponseSpecialized> {
    const path = `/market/${this.contextId}/bazaar`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get item market listings
   * @param params - Optional query parameters
   */
  public async itemmarket(params?: {
    bonus?: WeaponBonusEnum;
    offset?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<MarketItemMarketResponse> & MarketItemMarketResponse
  > {
    const path = `/market/${this.contextId}/itemmarket`;
    const query = {
      ...(params?.bonus !== undefined && { bonus: params.bonus }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Market API endpoints that require a "propertyTypeId"
 * @category Endpoints
 */
export class MarketPropertyTypeIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get properties market listings
   * @param params - Optional query parameters
   */
  public async properties(params?: {
    offset?: number;
    limit?: number;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<
    PaginatedResponse<MarketPropertiesResponse> & MarketPropertiesResponse
  > {
    const path = `/market/${this.contextId}/properties`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get properties rental listings
   * @param params - Optional query parameters
   */
  public async rentals(params?: {
    offset?: number;
    limit?: number;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<
    PaginatedResponse<MarketRentalsResponse> & MarketRentalsResponse
  > {
    const path = `/market/${this.contextId}/rentals`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
