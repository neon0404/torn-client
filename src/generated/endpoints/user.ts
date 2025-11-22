import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  ApiFiltersAttacksRevivesEnum,
  FactionAttacksFullResponse,
  FactionAttacksResponse,
  LogCategoryId,
  LogId,
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
  UserAmmoResponse,
  UserBarsResponse,
  UserBasicResponse,
  UserBattleStatsResponse,
  UserBountiesResponse,
  UserCalendarResponse,
  UserCompetitionResponse,
  UserCooldownsResponse,
  UserCrimesResponse,
  UserEducationResponse,
  UserEnlistedCarsResponse,
  UserEventsResponse,
  UserFactionBalanceResponse,
  UserFactionResponse,
  UserForumFeedResponse,
  UserForumFriendsResponse,
  UserForumPostsResponse,
  UserForumSubscribedThreadsResponse,
  UserForumThreadsResponse,
  UserHofResponse,
  UserHonorsResponse,
  UserIconsResponse,
  UserId,
  UserItemMarketResponse,
  UserJobPointsResponse,
  UserJobRanksResponse,
  UserJobResponse,
  UserListEnum,
  UserListResponse,
  UserLogsResponse,
  UserLookupResponse,
  UserMedalsResponse,
  UserMeritsResponse,
  UserMessagesResponse,
  UserMissionsResponse,
  UserMoneyResponse,
  UserNewEventsResponse,
  UserNewMessagesResponse,
  UserNotificationsResponse,
  UserOrganizedCrimeResponse,
  UserPersonalStatsResponse,
  UserProfileResponse,
  UserPropertiesResponse,
  UserPropertyResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
  UserRefillsResponse,
  UserResponse,
  UserSelectionName,
  UserSkillsResponse,
  UserTravelResponse,
  UserVirusResponse,
  UserWorkStatsResponse,
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
   * Get your ammo information
   * @param params - Optional query parameters
   */
  public async ammo(params?: {
    timestamp?: string;
  }): Promise<UserAmmoResponse> {
    const path = `/user/ammo`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your detailed attacks
   * @param params - Optional query parameters
   */
  public async attacks(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
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
   * Get your simplified attacks
   * @param params - Optional query parameters
   */
  public async attacksfull(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
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
   * Get your bars information
   * @param params - Optional query parameters
   */
  public async bars(params?: {
    timestamp?: string;
  }): Promise<UserBarsResponse> {
    const path = `/user/bars`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your basic profile information
   * @param params - Optional query parameters
   */
  public async basic(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<UserBasicResponse> {
    const path = `/user/basic`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your battlestats
   * @param params - Optional query parameters
   */
  public async battlestats(params?: {
    timestamp?: string;
  }): Promise<UserBattleStatsResponse> {
    const path = `/user/battlestats`;
    const query = {
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
   * Get your competition information
   * @param params - Optional query parameters
   */
  public async competition(params?: {
    timestamp?: string;
  }): Promise<UserCompetitionResponse> {
    const path = `/user/competition`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your cooldowns information
   * @param params - Optional query parameters
   */
  public async cooldowns(params?: {
    timestamp?: string;
  }): Promise<UserCooldownsResponse> {
    const path = `/user/cooldowns`;
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
   * Get your enlisted cars
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
   * Get your events
   * @param params - Optional query parameters
   */
  public async events(params?: {
    striptags?: "true" | "false";
    limit?: number;
    from?: number;
    to?: number;
    timestamp?: string;
  }): Promise<PaginatedResponse<UserEventsResponse> & UserEventsResponse> {
    const path = `/user/events`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your faction information
   * @param params - Optional query parameters
   */
  public async faction(params?: {
    timestamp?: string;
  }): Promise<UserFactionResponse> {
    const path = `/user/faction`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Deprecated. Use user/money instead
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
   * Get your achieved honors
   * @param params - Optional query parameters
   */
  public async honors(params?: {
    timestamp?: string;
  }): Promise<UserHonorsResponse> {
    const path = `/user/honors`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your icons information
   * @param params - Optional query parameters
   */
  public async icons(params?: {
    timestamp?: string;
  }): Promise<UserIconsResponse> {
    const path = `/user/icons`;
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
   * Get your job information
   * @param params - Optional query parameters
   */
  public async job(params?: { timestamp?: string }): Promise<UserJobResponse> {
    const path = `/user/job`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your jobpoints
   * @param params - Optional query parameters
   */
  public async jobpoints(params?: {
    timestamp?: string;
  }): Promise<UserJobPointsResponse> {
    const path = `/user/jobpoints`;
    const query = {
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
    striptags?: "true" | "false";
    limit?: number;
    offset?: number;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<PaginatedResponse<UserListResponse> & UserListResponse> {
    const path = `/user/list`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your logs
   * @param params - Optional query parameters
   */
  public async log(params?: {
    log?: LogId[];
    cat?: LogCategoryId;
    target?: UserId;
    limit?: number;
    to?: number;
    from?: number;
    timestamp?: string;
  }): Promise<PaginatedResponse<UserLogsResponse> & UserLogsResponse> {
    const path = `/user/log`;
    const query = {
      ...(params?.log && { log: params.log.join(",") }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.target !== undefined && { target: params.target }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your achieved medals
   * @param params - Optional query parameters
   */
  public async medals(params?: {
    timestamp?: string;
  }): Promise<UserMedalsResponse> {
    const path = `/user/medals`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your merits
   * @param params - Optional query parameters
   */
  public async merits(params?: {
    timestamp?: string;
  }): Promise<UserMeritsResponse> {
    const path = `/user/merits`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your messages
   * @param params - Optional query parameters
   */
  public async messages(params?: {
    limit?: number;
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    timestamp?: string;
  }): Promise<PaginatedResponse<UserMessagesResponse> & UserMessagesResponse> {
    const path = `/user/messages`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current missions information
   * @param params - Optional query parameters
   */
  public async missions(params?: {
    timestamp?: string;
  }): Promise<UserMissionsResponse> {
    const path = `/user/missions`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current wealth
   * @param params - Optional query parameters
   */
  public async money(params?: {
    timestamp?: string;
  }): Promise<UserMoneyResponse> {
    const path = `/user/money`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your unseen events
   * @param params - Optional query parameters
   */
  public async newevents(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<UserNewEventsResponse> {
    const path = `/user/newevents`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your unseen messages
   * @param params - Optional query parameters
   */
  public async newmessages(params?: {
    timestamp?: string;
  }): Promise<UserNewMessagesResponse> {
    const path = `/user/newmessages`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your notifications
   * @param params - Optional query parameters
   */
  public async notifications(params?: {
    timestamp?: string;
  }): Promise<UserNotificationsResponse> {
    const path = `/user/notifications`;
    const query = {
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
   * Get your own profile
   * @param params - Optional query parameters
   */
  public async profile(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<UserProfileResponse> {
    const path = `/user/profile`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your own properties
   * @param params - Optional query parameters
   */
  public async properties(params?: {
    filters?: "ownedByUser" | "ownedBySpouse";
    offset?: number;
    limit?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserPropertiesResponse> & UserPropertiesResponse
  > {
    const path = `/user/properties`;
    const query = {
      ...(params?.filters !== undefined && { filters: params.filters }),
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
   * Get your refills information
   * @param params - Optional query parameters
   */
  public async refills(params?: {
    timestamp?: string;
  }): Promise<UserRefillsResponse> {
    const path = `/user/refills`;
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
    filters?: ApiFiltersAttacksRevivesEnum[];
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<RevivesResponse> & RevivesResponse> {
    const path = `/user/revives`;
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
   * Get your simplified revives
   * @param params - Optional query parameters
   */
  public async revivesfull(params?: {
    filters?: ApiFiltersAttacksRevivesEnum[];
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<PaginatedResponse<RevivesFullResponse> & RevivesFullResponse> {
    const path = `/user/revivesFull`;
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
   * Get your skills
   * @param params - Optional query parameters
   */
  public async skills(params?: {
    timestamp?: string;
  }): Promise<UserSkillsResponse> {
    const path = `/user/skills`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your travel information
   * @param params - Optional query parameters
   */
  public async travel(params?: {
    timestamp?: string;
  }): Promise<UserTravelResponse> {
    const path = `/user/travel`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your virus information
   * @param params - Optional query parameters
   */
  public async virus(params?: {
    timestamp?: string;
  }): Promise<UserVirusResponse> {
    const path = `/user/virus`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your working stats
   * @param params - Optional query parameters
   */
  public async workstats(params?: {
    timestamp?: string;
  }): Promise<UserWorkStatsResponse> {
    const path = `/user/workstats`;
    const query = {
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
    legacy?: UserSelectionName[];
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
    filters?: "incoming" | "outgoing" | "ownedByUser" | "ownedBySpouse";
    striptags?: "true" | "false";
    offset?: number;
    timestamp?: string;
  }): Promise<UserResponse> {
    const path = `/user`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.legacy && { legacy: params.legacy.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.stat && { stat: params.stat.join(",") }),
      ...(params?.filters !== undefined && { filters: params.filters }),
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
   * Get basic profile information for a specific user
   * @param params - Optional query parameters
   */
  public async basic(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<UserBasicResponse> {
    const path = `/user/${this.contextId}/basic`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
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
   * Get competition information for a specific player
   * @param params - Optional query parameters
   */
  public async competition(params?: {
    timestamp?: string;
  }): Promise<UserCompetitionResponse> {
    const path = `/user/${this.contextId}/competition`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get faction information for a specific player
   * @param params - Optional query parameters
   */
  public async faction(params?: {
    timestamp?: string;
  }): Promise<UserFactionResponse> {
    const path = `/user/${this.contextId}/faction`;
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
   * Get icons information for a specific player
   * @param params - Optional query parameters
   */
  public async icons(params?: {
    timestamp?: string;
  }): Promise<UserIconsResponse> {
    const path = `/user/${this.contextId}/icons`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get job information for a specific player
   * @param params - Optional query parameters
   */
  public async job(params?: { timestamp?: string }): Promise<UserJobResponse> {
    const path = `/user/${this.contextId}/job`;
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
   * Get profile information for a specific player
   * @param params - Optional query parameters
   */
  public async profile(params?: {
    striptags?: "true" | "false";
    timestamp?: string;
  }): Promise<UserProfileResponse> {
    const path = `/user/${this.contextId}/profile`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get specific user's properties
   * @param params - Optional query parameters
   */
  public async properties(params?: {
    filters?: "ownedByUser" | "ownedBySpouse";
    offset?: number;
    limit?: number;
    timestamp?: string;
  }): Promise<
    PaginatedResponse<UserPropertiesResponse> & UserPropertiesResponse
  > {
    const path = `/user/${this.contextId}/properties`;
    const query = {
      ...(params?.filters !== undefined && { filters: params.filters }),
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
