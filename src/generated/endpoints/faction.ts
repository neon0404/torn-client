import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  ApiFiltersAttacksRevivesEnum,
  AttacksFullResponse,
  AttacksResponse,
  ChainId,
  Faction,
  FactionApplicationsResponse,
  FactionBalanceResponse,
  FactionBasicResponse,
  FactionChainReportResponse,
  FactionChainsResponse,
  FactionContributorsResponse,
  FactionCrimeId,
  FactionCrimeResponse,
  FactionCrimesResponse,
  FactionHofResponse,
  FactionId,
  FactionLookupResponse,
  FactionMembersResponse,
  FactionNewsCategory,
  FactionOngoingChainResponse,
  FactionPositionsResponse,
  FactionRacketsResponse,
  FactionRaidWarReportResponse,
  FactionRaidsResponse,
  FactionRankedWarReportResponse,
  FactionRankedWarResponse,
  FactionRankedWarsCategoryEnum,
  FactionResponse,
  FactionSearchResponse,
  FactionSelectionName,
  FactionStatEnum,
  FactionStatsResponse,
  FactionTerritoriesOwnershipResponse,
  FactionTerritoriesResponse,
  FactionTerritoryWarReportResponse,
  FactionTerritoryWarsCategoryEnum,
  FactionTerritoryWarsHistoryResponse,
  FactionUpgradesResponse,
  FactionWarfareChainsResponse,
  FactionWarfareDirtyBombsResponse,
  FactionWarfareRaidsResponse,
  FactionWarfareRankedResponse,
  FactionWarfareResponse,
  FactionWarfareTerritoryWarsResponse,
  FactionWarfareTypeEnum,
  FactionWarsResponse,
  NewsResponse,
  RaidWarId,
  RankedWarId,
  ReportTypeEnum,
  ReportsResponse,
  RevivesFullResponse,
  RevivesResponse,
  TerritoryWarId,
  TimestampResponse,
  UserId,
} from "../models";

/**
 * Access the Faction API endpoints
 * @category Endpoints
 */
export class FactionEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get your faction's applications
   * @param params - Optional query parameters
   */
  public async applications(params?: {
    timestamp?: number | string;
  }): Promise<FactionApplicationsResponse> {
    const path = `/faction/applications`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's detailed attacks
   * @param params - Optional query parameters
   */
  public async attacks(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<AttacksResponse> & AttacksResponse> {
    const path = `/faction/attacks`;
    const query = {
      ...(params?.filters && { filters: params.filters.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's simplified attacks
   * @param params - Optional query parameters
   */
  public async attacksfull(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<AttacksFullResponse> & AttacksFullResponse> {
    const path = `/faction/attacksfull`;
    const query = {
      ...(params?.filters && { filters: params.filters.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's & member's balance details
   * @param params - Optional query parameters
   */
  public async balance(params?: {
    cat?: "all" | "current";
    timestamp?: number | string;
  }): Promise<FactionBalanceResponse> {
    const path = `/faction/balance`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's basic details
   * @param params - Optional query parameters
   */
  public async basic(params?: {
    timestamp?: number | string;
  }): Promise<FactionBasicResponse> {
    const path = `/faction/basic`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's current chain
   * @param params - Optional query parameters
   */
  public async chain(params?: {
    timestamp?: number | string;
  }): Promise<FactionOngoingChainResponse> {
    const path = `/faction/chain`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of your faction's completed chains
   * @param params - Optional query parameters
   */
  public async chains(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionChainsResponse> & FactionChainsResponse
  > {
    const path = `/faction/chains`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's latest chain report
   * @param params - Optional query parameters
   */
  public async chainreport(params?: {
    timestamp?: number | string;
  }): Promise<FactionChainReportResponse> {
    const path = `/faction/chainreport`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's challenge contributors
   * @param params - Optional query parameters
   */
  public async contributors(params?: {
    stat?: FactionStatEnum;
    cat?: "all" | "current";
    timestamp?: number | string;
  }): Promise<FactionContributorsResponse> {
    const path = `/faction/contributors`;
    const query = {
      ...(params?.stat !== undefined && { stat: params.stat }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's organized crimes
   * @param params - Optional query parameters
   */
  public async crimes(params?: {
    cat?:
      | "all"
      | "recruiting"
      | "planning"
      | "failure"
      | "successful"
      | "expired"
      | "available"
      | "completed";
    filters?: "created_at" | "executed_at" | "ready_at" | "expired_at";
    limit?: number;
    offset?: number;
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionCrimesResponse> & FactionCrimesResponse
  > {
    const path = `/faction/crimes`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.filters !== undefined && { filters: params.filters }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all dirty bombs
   * @param params - Optional query parameters
   */
  public async dirtybombs(params?: {
    timestamp?: number | string;
  }): Promise<FactionWarfareDirtyBombsResponse> {
    const path = `/faction/dirtybombs`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's hall of fame rankings.
   * @param params - Optional query parameters
   */
  public async hof(params?: {
    timestamp?: number | string;
  }): Promise<FactionHofResponse> {
    const path = `/faction/hof`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of your faction's members
   * @param params - Optional query parameters
   */
  public async members(params?: {
    striptags?: "true" | "false";
    timestamp?: number | string;
  }): Promise<FactionMembersResponse> {
    const path = `/faction/members`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's news details
   * @param params - Optional query parameters
   */
  public async news(params?: {
    striptags?: "true" | "false";
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    cat?: FactionNewsCategory;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<NewsResponse> & NewsResponse> {
    const path = `/faction/news`;
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
   * Get your faction's positions details
   * @param params - Optional query parameters
   */
  public async positions(params?: {
    timestamp?: number | string;
  }): Promise<FactionPositionsResponse> {
    const path = `/faction/positions`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of current rackets
   * @param params - Optional query parameters
   */
  public async rackets(params?: {
    timestamp?: number | string;
  }): Promise<FactionRacketsResponse> {
    const path = `/faction/rackets`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get raids history for your faction
   * @param params - Optional query parameters
   */
  public async raids(params?: {
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    limit?: number;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<FactionRaidsResponse> & FactionRaidsResponse> {
    const path = `/faction/raids`;
    const query = {
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get ranked wars history for your faction
   * @param params - Optional query parameters
   */
  public async rankedwars(params?: {
    offset?: number;
    limit?: number;
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionRankedWarResponse> & FactionRankedWarResponse
  > {
    const path = `/faction/rankedwars`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get faction reports
   * @param params - Optional query parameters
   */
  public async reports(params?: {
    cat?: ReportTypeEnum;
    target?: UserId;
    limit?: number;
    offset?: number;
    sort?: "DESC" | "ASC";
    timestamp?: number | string;
  }): Promise<PaginatedResponse<ReportsResponse> & ReportsResponse> {
    const path = `/faction/reports`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.target !== undefined && { target: params.target }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's detailed revives
   * @param params - Optional query parameters
   */
  public async revives(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    striptags?: "true" | "false";
    timestamp?: number | string;
  }): Promise<PaginatedResponse<RevivesResponse> & RevivesResponse> {
    const path = `/faction/revives`;
    const query = {
      ...(params?.filters && { filters: params.filters.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's simplified revives
   * @param params - Optional query parameters
   */
  public async revivesfull(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    striptags?: "true" | "false";
    timestamp?: number | string;
  }): Promise<PaginatedResponse<RevivesFullResponse> & RevivesFullResponse> {
    const path = `/faction/revivesFull`;
    const query = {
      ...(params?.filters && { filters: params.filters.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Search factions by name or other criteria
   * @param params - Optional query parameters
   */
  public async search(params?: {
    name?: string;
    filters?: (
      | "destroyed"
      | "notDestroyed"
      | "recruiting"
      | "notRecruiting"
      | string
    )[];
    limit?: number;
    offset?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionSearchResponse> & FactionSearchResponse
  > {
    const path = `/faction/search`;
    const query = {
      ...(params?.name !== undefined && { name: params.name }),
      ...(params?.filters && { filters: params.filters.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get daily factions snapshot CSV
   * @param params - Optional query parameters
   */
  public async snapshot(params?: {
    timestamp?: number | string;
  }): Promise<unknown> {
    const path = `/faction/snapshot`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's challenges stats
   * @param params - Optional query parameters
   */
  public async stats(params?: {
    timestamp?: number | string;
  }): Promise<FactionStatsResponse> {
    const path = `/faction/stats`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of your faction's territories
   * @param params - Optional query parameters
   */
  public async territory(params?: {
    timestamp?: number | string;
  }): Promise<FactionTerritoriesResponse> {
    const path = `/faction/territory`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list territory ownership
   * @param params - Optional query parameters
   */
  public async territoryownership(params?: {
    offset?: number;
    limit?: number;
    timestamp?: number | string;
  }): Promise<FactionTerritoriesOwnershipResponse> {
    const path = `/faction/territoryownership`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get territory wars history for your faction
   * @param params - Optional query parameters
   */
  public async territorywars(params?: {
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    limit?: number;
    timestamp?: number | string;
  }): Promise<FactionTerritoryWarsHistoryResponse> {
    const path = `/faction/territorywars`;
    const query = {
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's upgrades
   * @param params - Optional query parameters
   */
  public async upgrades(params?: {
    timestamp?: number | string;
  }): Promise<FactionUpgradesResponse> {
    const path = `/faction/upgrades`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all chains
   * @param params - Optional query parameters
   */
  public async warfarechains(params?: {
    cat?: "active" | "complete";
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionWarfareChainsResponse> &
      FactionWarfareChainsResponse
  > {
    const path = `/faction/warfarechains`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all raids
   * @param params - Optional query parameters
   */
  public async warfareraids(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionWarfareRaidsResponse> & FactionWarfareRaidsResponse
  > {
    const path = `/faction/warfareraids`;
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
   * Get all ranked wars
   * @param params - Optional query parameters
   */
  public async warfareranked(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionWarfareRankedResponse> &
      FactionWarfareRankedResponse
  > {
    const path = `/faction/warfareranked`;
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
   * Get all territory wars
   * @param params - Optional query parameters
   */
  public async warfareterritory(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionWarfareTerritoryWarsResponse> &
      FactionWarfareTerritoryWarsResponse
  > {
    const path = `/faction/warfareterritory`;
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
   * Get faction warfare
   * @param params - Optional query parameters
   */
  public async warfare(params?: {
    cat?: FactionWarfareTypeEnum;
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionWarfareResponse> & FactionWarfareResponse
  > {
    const path = `/faction/warfare`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction's wars & pacts details
   * @param params - Optional query parameters
   */
  public async wars(params?: {
    timestamp?: number | string;
  }): Promise<FactionWarsResponse> {
    const path = `/faction/wars`;
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
    timestamp?: number | string;
  }): Promise<FactionLookupResponse> {
    const path = `/faction/lookup`;
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
    timestamp?: number | string;
  }): Promise<TimestampResponse> {
    const path = `/faction/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Faction selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: FactionSelectionName[];
    id?:
      | FactionId
      | FactionCrimeId
      | ChainId
      | RankedWarId
      | TerritoryWarId
      | RaidWarId;
    legacy?: FactionSelectionName[];
    limit?: number;
    from?: number;
    to?: number;
    cat?:
      | "all"
      | "current"
      | "all"
      | "recruiting"
      | "planning"
      | "failure"
      | "successful"
      | "expired"
      | "available"
      | "completed"
      | FactionNewsCategory
      | FactionRankedWarsCategoryEnum
      | ReportTypeEnum
      | FactionWarfareTypeEnum
      | FactionTerritoryWarsCategoryEnum;
    stat?: FactionStatEnum;
    filters?:
      | "created_at"
      | "executed_at"
      | "ready_at"
      | "expired_at"
      | "incoming"
      | "outgoing";
    striptags?: "true" | "false";
    sort?: "DESC" | "ASC";
    offset?: number;
    timestamp?: number | string;
  }): Promise<FactionResponse> {
    const path = `/faction`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.legacy && { legacy: params.legacy.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.stat !== undefined && { stat: params.stat }),
      ...(params?.filters !== undefined && { filters: params.filters }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param id - The ID for this context */
  public withId(id: string | number): FactionIdContext {
    return new FactionIdContext(this.requester, id);
  }

  /** @param chainId - The ID for this context */
  public withChainId(chainId: string | number): FactionChainIdContext {
    return new FactionChainIdContext(this.requester, chainId);
  }

  /** @param crimeId - The ID for this context */
  public withCrimeId(crimeId: string | number): FactionCrimeIdContext {
    return new FactionCrimeIdContext(this.requester, crimeId);
  }

  /** @param raidWarId - The ID for this context */
  public withRaidWarId(raidWarId: string | number): FactionRaidWarIdContext {
    return new FactionRaidWarIdContext(this.requester, raidWarId);
  }

  /** @param rankedWarId - The ID for this context */
  public withRankedWarId(
    rankedWarId: string | number,
  ): FactionRankedWarIdContext {
    return new FactionRankedWarIdContext(this.requester, rankedWarId);
  }

  /** @param territoryWarId - The ID for this context */
  public withTerritoryWarId(
    territoryWarId: string | number,
  ): FactionTerritoryWarIdContext {
    return new FactionTerritoryWarIdContext(this.requester, territoryWarId);
  }
}

/**
 * Context class for Faction API endpoints that require a "id"
 * @category Endpoints
 */
export class FactionIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get a faction's basic details
   * @param params - Optional query parameters
   */
  public async basic(params?: {
    timestamp?: number | string;
  }): Promise<FactionBasicResponse> {
    const path = `/faction/${this.contextId}/basic`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a faction's current chain
   * @param params - Optional query parameters
   */
  public async chain(params?: {
    timestamp?: number | string;
  }): Promise<FactionOngoingChainResponse> {
    const path = `/faction/${this.contextId}/chain`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of a faction's completed chains
   * @param params - Optional query parameters
   */
  public async chains(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionChainsResponse> & FactionChainsResponse
  > {
    const path = `/faction/${this.contextId}/chains`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a faction's hall of fame rankings.
   * @param params - Optional query parameters
   */
  public async hof(params?: {
    timestamp?: number | string;
  }): Promise<FactionHofResponse> {
    const path = `/faction/${this.contextId}/hof`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of a faction's members
   * @param params - Optional query parameters
   */
  public async members(params?: {
    striptags?: "true" | "false";
    timestamp?: number | string;
  }): Promise<FactionMembersResponse> {
    const path = `/faction/${this.contextId}/members`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a faction's raids history
   * @param params - Optional query parameters
   */
  public async raids(params?: {
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    limit?: number;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<FactionRaidsResponse> & FactionRaidsResponse> {
    const path = `/faction/${this.contextId}/raids`;
    const query = {
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a faction's ranked wars history
   * @param params - Optional query parameters
   */
  public async rankedwars(params?: {
    offset?: number;
    limit?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<FactionRankedWarResponse> & FactionRankedWarResponse
  > {
    const path = `/faction/${this.contextId}/rankedwars`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a list of a faction's territories
   * @param params - Optional query parameters
   */
  public async territory(params?: {
    timestamp?: number | string;
  }): Promise<FactionTerritoriesResponse> {
    const path = `/faction/${this.contextId}/territory`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a faction's territory wars history
   * @param params - Optional query parameters
   */
  public async territorywars(params?: {
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    limit?: number;
    timestamp?: number | string;
  }): Promise<FactionTerritoryWarsHistoryResponse> {
    const path = `/faction/${this.contextId}/territorywars`;
    const query = {
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a faction's wars & pacts details
   * @param params - Optional query parameters
   */
  public async wars(params?: {
    timestamp?: number | string;
  }): Promise<FactionWarsResponse> {
    const path = `/faction/${this.contextId}/wars`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** Get faction by ID */
  public async get(): Promise<Faction> {
    const path = `/faction/${this.contextId}`;
    const query = {};
    return this.requester(path, query);
  }
}

/**
 * Context class for Faction API endpoints that require a "chainId"
 * @category Endpoints
 */
export class FactionChainIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get a chain report
   * @param params - Optional query parameters
   */
  public async chainreport(params?: {
    timestamp?: number | string;
  }): Promise<FactionChainReportResponse> {
    const path = `/faction/${this.contextId}/chainreport`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Faction API endpoints that require a "crimeId"
 * @category Endpoints
 */
export class FactionCrimeIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get a specific organized crime
   * @param params - Optional query parameters
   */
  public async crime(params?: {
    timestamp?: number | string;
  }): Promise<FactionCrimeResponse> {
    const path = `/faction/${this.contextId}/crime`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Faction API endpoints that require a "raidWarId"
 * @category Endpoints
 */
export class FactionRaidWarIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get raid war details
   * @param params - Optional query parameters
   */
  public async raidreport(params?: {
    timestamp?: number | string;
  }): Promise<FactionRaidWarReportResponse> {
    const path = `/faction/${this.contextId}/raidreport`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Faction API endpoints that require a "rankedWarId"
 * @category Endpoints
 */
export class FactionRankedWarIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get ranked war details
   * @param params - Optional query parameters
   */
  public async rankedwarreport(params?: {
    timestamp?: number | string;
  }): Promise<FactionRankedWarReportResponse> {
    const path = `/faction/${this.contextId}/rankedwarreport`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Faction API endpoints that require a "territoryWarId"
 * @category Endpoints
 */
export class FactionTerritoryWarIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get territory war details
   * @param params - Optional query parameters
   */
  public async territorywarreport(params?: {
    timestamp?: number | string;
  }): Promise<FactionTerritoryWarReportResponse> {
    const path = `/faction/${this.contextId}/territorywarreport`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
