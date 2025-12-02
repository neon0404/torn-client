import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  AttackCode,
  AttackLogResponse,
  FactionTerritoryEnum,
  HonorId,
  ItemId,
  LogCategoryId,
  MedalId,
  TimestampResponse,
  TornBountiesResponse,
  TornCalendarResponse,
  TornCrimeId,
  TornCrimesResponse,
  TornEducationResponse,
  TornFactionHofCategory,
  TornFactionHofResponse,
  TornFactionTreeResponse,
  TornHofCategory,
  TornHofResponse,
  TornHonorsResponse,
  TornItemAmmoResponse,
  TornItemCategory,
  TornItemDetailsResponse,
  TornItemModsResponse,
  TornItemsResponse,
  TornLogCategoriesResponse,
  TornLogTypesResponse,
  TornLookupResponse,
  TornMedalsResponse,
  TornMeritsResponse,
  TornOrganizedCrimeResponse,
  TornProperties,
  TornResponse,
  TornSelectionName,
  TornSubcrimesResponse,
  TornTerritoriesResponse,
} from "../models";

/**
 * Access the Torn API endpoints
 * @category Endpoints
 */
export class TornEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get attack log details
   * @param params - Optional query parameters
   */
  public async attacklog(params?: {
    log?: AttackCode;
    offset?: number;
    sort?: "DESC" | "ASC";
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<AttackLogResponse> & AttackLogResponse> {
    const path = `/torn/attacklog`;
    const query = {
      ...(params?.log !== undefined && { log: params.log }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get bounties
   * @param params - Optional query parameters
   */
  public async bounties(params?: {
    limit?: number;
    offset?: number;
    timestamp?: string;
  }): Promise<PaginatedResponse<TornBountiesResponse> & TornBountiesResponse> {
    const path = `/torn/bounties`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get calendar information
   * @param params - Optional query parameters
   */
  public async calendar(params?: {
    timestamp?: string;
  }): Promise<TornCalendarResponse> {
    const path = `/torn/calendar`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get crimes information
   * @param params - Optional query parameters
   */
  public async crimes(params?: {
    timestamp?: string;
  }): Promise<TornCrimesResponse> {
    const path = `/torn/crimes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get education information
   * @param params - Optional query parameters
   */
  public async education(params?: {
    timestamp?: string;
  }): Promise<TornEducationResponse> {
    const path = `/torn/education`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get faction hall of fame positions for a specific category
   * @param params - Optional query parameters
   */
  public async factionhof(params?: {
    limit?: number;
    offset?: number;
    cat?: TornFactionHofCategory;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<TornFactionHofResponse> & TornFactionHofResponse
  > {
    const path = `/torn/factionhof`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get full faction tree
   * @param params - Optional query parameters
   */
  public async factiontree(params?: {
    timestamp?: string;
  }): Promise<TornFactionTreeResponse> {
    const path = `/torn/factiontree`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all honors
   * @param params - Optional query parameters
   */
  public async honors(params?: {
    limit?: number;
    offset?: number;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<TornHonorsResponse> {
    const path = `/torn/honors`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get player hall of fame positions for a specific category
   * @param params - Optional query parameters
   */
  public async hof(params?: {
    limit?: number;
    offset?: number;
    cat?: TornHofCategory;
    timestamp?: string;
  }): Promise<PaginatedResponse<TornHofResponse> & TornHofResponse> {
    const path = `/torn/hof`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get information about ammo
   * @param params - Optional query parameters
   */
  public async itemammo(params?: {
    timestamp?: string;
  }): Promise<TornItemAmmoResponse> {
    const path = `/torn/itemammo`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get information about a specific item
   * @param params - Optional query parameters
   */
  public async itemdetails(params?: {
    timestamp?: string;
  }): Promise<TornItemDetailsResponse> {
    const path = `/torn/itemdetails`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get information about weapon upgrades
   * @param params - Optional query parameters
   */
  public async itemmods(params?: {
    timestamp?: string;
  }): Promise<TornItemModsResponse> {
    const path = `/torn/itemmods`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get information about items
   * @param params - Optional query parameters
   */
  public async items(params?: {
    cat?: TornItemCategory;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<TornItemsResponse> {
    const path = `/torn/items`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get available log categories
   * @param params - Optional query parameters
   */
  public async logcategories(params?: {
    timestamp?: string;
  }): Promise<TornLogCategoriesResponse> {
    const path = `/torn/logcategories`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all available log ids
   * @param params - Optional query parameters
   */
  public async logtypes(params?: {
    timestamp?: string;
  }): Promise<TornLogTypesResponse> {
    const path = `/torn/logtypes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all medals
   * @param params - Optional query parameters
   */
  public async medals(params?: {
    timestamp?: string;
  }): Promise<TornMedalsResponse> {
    const path = `/torn/medals`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all merits
   * @param params - Optional query parameters
   */
  public async merits(params?: {
    timestamp?: string;
  }): Promise<TornMeritsResponse> {
    const path = `/torn/merits`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get organized crimes information
   * @param params - Optional query parameters
   */
  public async organizedcrimes(params?: {
    timestamp?: string;
  }): Promise<TornOrganizedCrimeResponse> {
    const path = `/torn/organizedcrimes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get properties details
   * @param params - Optional query parameters
   */
  public async properties(params?: {
    timestamp?: string;
  }): Promise<TornProperties> {
    const path = `/torn/properties`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get territory details
   * @param params - Optional query parameters
   */
  public async territory(params?: {
    ids?: FactionTerritoryEnum[];
    offset?: number;
    limit?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<TornTerritoriesResponse> & TornTerritoriesResponse
  > {
    const path = `/torn/territory`;
    const query = {
      ...(params?.ids && { ids: params.ids.join(",") }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all available torn selections
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<TornLookupResponse> {
    const path = `/torn/lookup`;
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
    const path = `/torn/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Torn selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: TornSelectionName[];
    id?:
      | LogCategoryId
      | TornCrimeId
      | ItemId[]
      | MedalId[]
      | HonorId[]
      | FactionTerritoryEnum[];
    legacy?: TornSelectionName[];
    striptags?: "true" | "false";
    limit?: number;
    to?: number;
    from?: number;
    sort?: "DESC" | "ASC";
    cat?: TornFactionHofCategory | TornHofCategory | TornItemCategory;
    offset?: number;
    timestamp?: string;
  }): Promise<TornResponse> {
    const path = `/torn`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.legacy && { legacy: params.legacy.join(",") }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param ids - The ID for this context */
  public withIds(ids: string | number): TornIdsContext {
    return new TornIdsContext(this.requester, ids);
  }

  /** @param logCategoryId - The ID for this context */
  public withLogCategoryId(
    logCategoryId: string | number,
  ): TornLogCategoryIdContext {
    return new TornLogCategoryIdContext(this.requester, logCategoryId);
  }

  /** @param crimeId - The ID for this context */
  public withCrimeId(crimeId: string | number): TornCrimeIdContext {
    return new TornCrimeIdContext(this.requester, crimeId);
  }
}

/**
 * Context class for Torn API endpoints that require a "ids"
 * @category Endpoints
 */
export class TornIdsContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get specific honors
   * @param params - Optional query parameters
   */
  public async honors(params?: {
    timestamp?: string;
  }): Promise<TornHonorsResponse> {
    const path = `/torn/${this.contextId}/honors`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get information about items
   * @param params - Optional query parameters
   */
  public async items(params?: {
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<TornItemsResponse> {
    const path = `/torn/${this.contextId}/items`;
    const query = {
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get specific medals
   * @param params - Optional query parameters
   */
  public async medals(params?: {
    timestamp?: string;
  }): Promise<TornMedalsResponse> {
    const path = `/torn/${this.contextId}/medals`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Torn API endpoints that require a "logCategoryId"
 * @category Endpoints
 */
export class TornLogCategoryIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get available log ids for a specific log category
   * @param params - Optional query parameters
   */
  public async logtypes(params?: {
    timestamp?: string;
  }): Promise<TornLogTypesResponse> {
    const path = `/torn/${this.contextId}/logtypes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Torn API endpoints that require a "crimeId"
 * @category Endpoints
 */
export class TornCrimeIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get Subcrimes information
   * @param params - Optional query parameters
   */
  public async subcrimes(params?: {
    timestamp?: string;
  }): Promise<TornSubcrimesResponse> {
    const path = `/torn/${this.contextId}/subcrimes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
