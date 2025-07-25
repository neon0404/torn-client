import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  FactionAttacksFullResponse,
  FactionAttacksResponse,
  PersonalStatsCategoryEnum,
  PersonalStatsStatName,
  RacingRaceTypeEnum,
  ReportTypeEnum,
  ReportsResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
  TornCrimeId,
  User,
  UserBountiesResponse,
  UserCalendarResponse,
  UserCrimesResponse,
  UserEducationResponse,
  UserEnlistedCarsResponse,
  UserFactionBalanceResponse,
  UserForumFeedResponse,
  UserForumFriendsResponse,
  UserForumPostsResponse,
  UserForumSubscribedThreadsResponse,
  UserForumThreadsResponse,
  UserHofResponse,
  UserId,
  UserItemMarketResponse,
  UserJobRanksResponse,
  UserListEnum,
  UserListResponse,
  UserLookupResponse,
  UserOrganizedCrimeResponse,
  UserPersonalStatsResponse,
  UserPropertiesResponse,
  UserPropertyResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
  UserResponse,
  UserSelectionName,
} from "../models";

/**
 * Access the User API endpoints
 * @category Endpoints
 */
export class UserEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get your detailed attacks
   * @param params - Optional query parameters
   */
  public async attacks(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<FactionAttacksResponse> & FactionAttacksResponse
  > {
    const path = `/user/attacks`;
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
   * Get your simplified attacks
   * @param params - Optional query parameters
   */
  public async attacksfull(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<FactionAttacksFullResponse> & FactionAttacksFullResponse
  > {
    const path = `/user/attacksfull`;
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
   * Get bounties placed on you
   * @param params - Optional query parameters
   */
  public async bounties(params?: {
    timestamp?: string;
  }): Promise<UserBountiesResponse> {
    const path = `/user/bounties`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your competition's event start time
   * @param params - Optional query parameters
   */
  public async calendar(params?: {
    timestamp?: string;
  }): Promise<UserCalendarResponse> {
    const path = `/user/calendar`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your education information
   * @param params - Optional query parameters
   */
  public async education(params?: {
    timestamp?: string;
  }): Promise<UserEducationResponse> {
    const path = `/user/education`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get user enlisted cars
   * @param params - Optional query parameters
   */
  public async enlistedcars(params?: {
    timestamp?: string;
  }): Promise<UserEnlistedCarsResponse> {
    const path = `/user/enlistedcars`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current faction balance
   * @param params - Optional query parameters
   */
  public async factionbalance(params?: {
    timestamp?: string;
  }): Promise<UserFactionBalanceResponse> {
    const path = `/user/factionbalance`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get updates on your threads and posts
   * @param params - Optional query parameters
   */
  public async forumfeed(params?: {
    timestamp?: string;
  }): Promise<UserForumFeedResponse> {
    const path = `/user/forumfeed`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get updates on your friends' activity
   * @param params - Optional query parameters
   */
  public async forumfriends(params?: {
    timestamp?: string;
  }): Promise<UserForumFriendsResponse> {
    const path = `/user/forumfriends`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your posts
   * @param params - Optional query parameters
   */
  public async forumposts(params?: {
    striptags?: "true" | "false";
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserForumPostsResponse> & UserForumPostsResponse
  > {
    const path = `/user/forumposts`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get updates on threads you subscribed to
   * @param params - Optional query parameters
   */
  public async forumsubscribedthreads(params?: {
    timestamp?: string;
  }): Promise<UserForumSubscribedThreadsResponse> {
    const path = `/user/forumsubscribedthreads`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your threads
   * @param params - Optional query parameters
   */
  public async forumthreads(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserForumThreadsResponse> & UserForumThreadsResponse
  > {
    const path = `/user/forumthreads`;
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
   * Get your hall of fame rankings
   * @param params - Optional query parameters
   */
  public async hof(params?: { timestamp?: string }): Promise<UserHofResponse> {
    const path = `/user/hof`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your item market listings for a specific item
   * @param params - Optional query parameters
   */
  public async itemmarket(params?: {
    offset?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserItemMarketResponse> & UserItemMarketResponse
  > {
    const path = `/user/itemmarket`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your starter job positions
   * @param params - Optional query parameters
   */
  public async jobranks(params?: {
    timestamp?: string;
  }): Promise<UserJobRanksResponse> {
    const path = `/user/jobranks`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your friends, enemies or targets list
   * @param params - Optional query parameters
   */
  public async list(params?: {
    cat?: UserListEnum;
    limit?: number;
    offset?: number;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<PaginatedResponse<UserListResponse> & UserListResponse> {
    const path = `/user/list`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current ongoing organized crime
   * @param params - Optional query parameters
   */
  public async organizedcrime(params?: {
    timestamp?: string;
  }): Promise<UserOrganizedCrimeResponse> {
    const path = `/user/organizedcrime`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your personal stats
   * @param params - Optional query parameters
   */
  public async personalstats(params?: {
    cat?: PersonalStatsCategoryEnum;
    stat?: PersonalStatsStatName[];
    timestamp?: number;
  }): Promise<UserPersonalStatsResponse> {
    const path = `/user/personalstats`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.stat && { stat: params.stat.join(",") }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your own properties
   * @param params - Optional query parameters
   */
  public async properties(params?: {
    offset?: number;
    limit?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserPropertiesResponse> & UserPropertiesResponse
  > {
    const path = `/user/properties`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current property
   * @param params - Optional query parameters
   */
  public async property(params?: {
    timestamp?: string;
  }): Promise<UserPropertyResponse> {
    const path = `/user/property`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get user races
   * @param params - Optional query parameters
   */
  public async races(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    cat?: RacingRaceTypeEnum;
    timestamp?: string;
  }): Promise<PaginatedResponse<UserRacesResponse> & UserRacesResponse> {
    const path = `/user/races`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current racing records
   * @param params - Optional query parameters
   */
  public async racingrecords(params?: {
    timestamp?: string;
  }): Promise<UserRacingRecordsResponse> {
    const path = `/user/racingrecords`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your reports
   * @param params - Optional query parameters
   */
  public async reports(params?: {
    cat?: ReportTypeEnum;
    target?: UserId;
    limit?: number;
    offset?: number;
    timestamp?: string;
  }): Promise<PaginatedResponse<ReportsResponse> & ReportsResponse> {
    const path = `/user/reports`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.target !== undefined && { target: params.target }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your detailed revives
   * @param params - Optional query parameters
   */
  public async revives(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<RevivesResponse> & RevivesResponse> {
    const path = `/user/revives`;
    const query = {
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
   * Get your simplified revives
   * @param params - Optional query parameters
   */
  public async revivesfull(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<RevivesFullResponse> & RevivesFullResponse> {
    const path = `/user/revivesFull`;
    const query = {
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
   * Get all available user selections
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<UserLookupResponse> {
    const path = `/user/lookup`;
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
    const path = `/user/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any User selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: UserSelectionName[];
    id?: UserId | TornCrimeId | string;
    limit?: number;
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    cat?:
      | ReportTypeEnum
      | UserListEnum
      | PersonalStatsCategoryEnum
      | RacingRaceTypeEnum;
    stat?: PersonalStatsStatName[];
    striptags?: "true" | "false";
    offset?: number;
    timestamp?: string;
  }): Promise<UserResponse> {
    const path = `/user`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.stat && { stat: params.stat.join(",") }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param id - The ID for this context */
  public withId(id: string | number): UserIdContext {
    return new UserIdContext(this.requester, id);
  }

  /** @param crimeId - The ID for this context */
  public withCrimeId(crimeId: string | number): UserCrimeIdContext {
    return new UserCrimeIdContext(this.requester, crimeId);
  }
}

/**
 * Context class for User API endpoints that require a "id"
 * @category Endpoints
 */
export class UserIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get bounties placed on a specific user
   * @param params - Optional query parameters
   */
  public async bounties(params?: {
    timestamp?: string;
  }): Promise<UserBountiesResponse> {
    const path = `/user/${this.contextId}/bounties`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get posts for a specific player
   * @param params - Optional query parameters
   */
  public async forumposts(params?: {
    striptags?: "true" | "false";
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserForumPostsResponse> & UserForumPostsResponse
  > {
    const path = `/user/${this.contextId}/forumposts`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get threads for a specific player
   * @param params - Optional query parameters
   */
  public async forumthreads(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserForumThreadsResponse> & UserForumThreadsResponse
  > {
    const path = `/user/${this.contextId}/forumthreads`;
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
   * Get hall of fame rankings for a specific player
   * @param params - Optional query parameters
   */
  public async hof(params?: { timestamp?: string }): Promise<UserHofResponse> {
    const path = `/user/${this.contextId}/hof`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get a player's personal stats
   * @param params - Optional query parameters
   */
  public async personalstats(params?: {
    cat?: PersonalStatsCategoryEnum;
    stat?: PersonalStatsStatName[];
    timestamp?: number;
  }): Promise<UserPersonalStatsResponse> {
    const path = `/user/${this.contextId}/personalstats`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.stat && { stat: params.stat.join(",") }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get specific user's properties
   * @param params - Optional query parameters
   */
  public async properties(params?: {
    offset?: number;
    limit?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserPropertiesResponse> & UserPropertiesResponse
  > {
    const path = `/user/${this.contextId}/properties`;
    const query = {
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get specific user's property
   * @param params - Optional query parameters
   */
  public async property(params?: {
    timestamp?: string;
  }): Promise<UserPropertyResponse> {
    const path = `/user/${this.contextId}/property`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** Get user by ID */
  public async get(): Promise<User> {
    const path = `/user/${this.contextId}`;
    const query = {};
    return this.requester(path, query);
  }
}

/**
 * Context class for User API endpoints that require a "crimeId"
 * @category Endpoints
 */
export class UserCrimeIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get your crime statistics
   * @param params - Optional query parameters
   */
  public async crimes(params?: {
    timestamp?: string;
  }): Promise<UserCrimesResponse> {
    const path = `/user/${this.contextId}/crimes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
