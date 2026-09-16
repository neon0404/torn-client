import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  ApiFiltersAttacksRevivesEnum,
  AttacksFullResponse,
  AttacksResponse,
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
  TornInventoryItemType,
  TradeCategoryEnum,
  TradeId,
  User,
  UserAmmoResponse,
  UserBarsResponse,
  UserBasicResponse,
  UserBattleStatsResponse,
  UserBountiesResponse,
  UserCalendarResponse,
  UserCasinoResponse,
  UserCompetitionResponse,
  UserCooldownsResponse,
  UserCrimesResponse,
  UserDiscordPathId,
  UserDiscordResponse,
  UserEducationResponse,
  UserEnlistedCarsResponse,
  UserEquipmentResponse,
  UserEventsResponse,
  UserFactionResponse,
  UserForumFeedResponse,
  UserForumFriendsResponse,
  UserForumPostsResponse,
  UserForumSubscribedThreadsResponse,
  UserForumThreadsResponse,
  UserGymResponse,
  UserHofResponse,
  UserHonorsResponse,
  UserIconsResponse,
  UserId,
  UserInventoryResponse,
  UserItemMarketResponse,
  UserItemModsResponse,
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
  UserNetworthResponse,
  UserNewEventsResponse,
  UserNewMessagesResponse,
  UserNotificationsResponse,
  UserOrganizedCrimeResponse,
  UserOrganizedCrimesResponse,
  UserPerksResponse,
  UserPersonalStatsResponse,
  UserProfileResponse,
  UserPropertiesResponse,
  UserPropertyResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
  UserRefillsResponse,
  UserResponse,
  UserSearchResponse,
  UserSelectionName,
  UserSkillsResponse,
  UserStocksResponse,
  UserTradeResponse,
  UserTradesResponse,
  UserTravelResponse,
  UserVirusResponse,
  UserWeaponExpResponse,
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<PaginatedResponse<AttacksResponse> & AttacksResponse> {
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
    timestamp?: number | string;
  }): Promise<PaginatedResponse<AttacksFullResponse> & AttacksFullResponse> {
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserBountiesResponse> {
    const path = `/user/bounties`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your calendar events start time
   * @param params - Optional query parameters
   */
  public async calendar(params?: {
    timestamp?: number | string;
  }): Promise<UserCalendarResponse> {
    const path = `/user/calendar`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your casino streak & tokens
   * @param params - Optional query parameters
   */
  public async casino(params?: {
    timestamp?: number | string;
  }): Promise<UserCasinoResponse> {
    const path = `/user/casino`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserCooldownsResponse> {
    const path = `/user/cooldowns`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your discord information
   * @param params - Optional query parameters
   */
  public async discord(params?: {
    timestamp?: number | string;
  }): Promise<UserDiscordResponse> {
    const path = `/user/discord`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserEnlistedCarsResponse> {
    const path = `/user/enlistedcars`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your equipment & clothing
   * @param params - Optional query parameters
   */
  public async equipment(params?: {
    timestamp?: number | string;
  }): Promise<UserEquipmentResponse> {
    const path = `/user/equipment`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserFactionResponse> {
    const path = `/user/faction`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
   * Get your currently active gym
   * @param params - Optional query parameters
   */
  public async gym(params?: {
    timestamp?: number | string;
  }): Promise<UserGymResponse> {
    const path = `/user/gym`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your hall of fame rankings
   * @param params - Optional query parameters
   */
  public async hof(params?: {
    timestamp?: number | string;
  }): Promise<UserHofResponse> {
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserIconsResponse> {
    const path = `/user/icons`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your inventory
   * @param params - Optional query parameters
   */
  public async inventory(params?: {
    cat?: TornInventoryItemType;
    offset?: number;
    limit?: number;
    timestamp?: number | string;
  }): Promise<
    PaginatedResponse<UserInventoryResponse> & UserInventoryResponse
  > {
    const path = `/user/inventory`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your item market listings
   * @param params - Optional query parameters
   */
  public async itemmarket(params?: {
    offset?: number;
    timestamp?: number | string;
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
   * Get your information about available item mods
   * @param params - Optional query parameters
   */
  public async itemmods(params?: {
    timestamp?: number | string;
  }): Promise<UserItemModsResponse> {
    const path = `/user/itemmods`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your job information
   * @param params - Optional query parameters
   */
  public async job(params?: {
    timestamp?: number | string;
  }): Promise<UserJobResponse> {
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
    nanostamp?: string;
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
      ...(params?.nanostamp !== undefined && { nanostamp: params.nanostamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all your achieved medals
   * @param params - Optional query parameters
   */
  public async medals(params?: {
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserNewEventsResponse> {
    const path = `/user/newevents`;
    const query = {
      ...(params?.striptags !== undefined && { striptags: params.striptags }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your networth
   * @param params - Optional query parameters
   */
  public async networth(params?: {
    timestamp?: number | string;
  }): Promise<UserNetworthResponse> {
    const path = `/user/networth`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your unseen messages
   * @param params - Optional query parameters
   */
  public async newmessages(params?: {
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserOrganizedCrimeResponse> {
    const path = `/user/organizedcrime`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your available slots for organized crimes with status 'Recruiting'
   * @param params - Optional query parameters
   */
  public async organizedcrimes(params?: {
    timestamp?: number | string;
  }): Promise<UserOrganizedCrimesResponse> {
    const path = `/user/organizedcrimes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your current perks
   * @param params - Optional query parameters
   */
  public async perks(params?: {
    timestamp?: number | string;
  }): Promise<UserPerksResponse> {
    const path = `/user/perks`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserPropertyResponse> {
    const path = `/user/property`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your races
   * @param params - Optional query parameters
   */
  public async races(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    from?: number;
    to?: number;
    cat?: RacingRaceTypeEnum;
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    sort?: "DESC" | "ASC";
    timestamp?: number | string;
  }): Promise<PaginatedResponse<ReportsResponse> & ReportsResponse> {
    const path = `/user/reports`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserSkillsResponse> {
    const path = `/user/skills`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Search users by name or other criteria
   * @param params - Optional query parameters
   */
  public async search(params?: {
    name?: string;
    filters?: (
      | "married"
      | "notMarried"
      | "traveling"
      | "notTraveling"
      | "inFaction"
      | "notInFaction"
      | "inCompany"
      | "notInCompany"
      | "inHospital"
      | "notInHospital"
      | "inJail"
      | "notInJail"
      | "inFederalJail"
      | "notInFederalJail"
      | "male"
      | "female"
      | "enby"
      | "lastActionNow"
      | "lastActionRecent"
      | "lastActionHourAgo"
      | "lastActionDayAgo"
      | "lastActionWeekAgo"
      | "lastActionMonthAgo"
      | "lastActionYearAgo"
      | string
    )[];
    offset?: number;
    sort?: "DESC" | "ASC";
    cursor?: string;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<UserSearchResponse> & UserSearchResponse> {
    const path = `/user/search`;
    const query = {
      ...(params?.name !== undefined && { name: params.name }),
      ...(params?.filters && { filters: params.filters.join(",") }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.cursor !== undefined && { cursor: params.cursor }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get daily active players snapshot CSV
   * @param params - Optional query parameters
   */
  public async snapshot(params?: {
    timestamp?: number | string;
  }): Promise<unknown> {
    const path = `/user/snapshot`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your stocks
   * @param params - Optional query parameters
   */
  public async stocks(params?: {
    timestamp?: number | string;
  }): Promise<UserStocksResponse> {
    const path = `/user/stocks`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your trades
   * @param params - Optional query parameters
   */
  public async trades(params?: {
    cat?: TradeCategoryEnum;
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    timestamp?: number | string;
  }): Promise<PaginatedResponse<UserTradesResponse> & UserTradesResponse> {
    const path = `/user/trades`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your travel information
   * @param params - Optional query parameters
   */
  public async travel(params?: {
    timestamp?: number | string;
  }): Promise<UserTravelResponse> {
    const path = `/user/travel`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your virus coding information
   * @param params - Optional query parameters
   */
  public async virus(params?: {
    timestamp?: number | string;
  }): Promise<UserVirusResponse> {
    const path = `/user/virus`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get your weapon experience information
   * @param params - Optional query parameters
   */
  public async weaponexp(params?: {
    timestamp?: number | string;
  }): Promise<UserWeaponExpResponse> {
    const path = `/user/weaponexp`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    id?: UserDiscordPathId | TornCrimeId | TradeId | string;
    legacy?: UserSelectionName[];
    limit?: number;
    from?: number;
    to?: number;
    sort?: "DESC" | "ASC";
    cat?:
      | ReportTypeEnum
      | UserListEnum
      | PersonalStatsCategoryEnum
      | RacingRaceTypeEnum
      | TornInventoryItemType
      | TradeCategoryEnum;
    stat?: PersonalStatsStatName[];
    filters?: "incoming" | "outgoing" | "ownedByUser" | "ownedBySpouse";
    striptags?: "true" | "false";
    offset?: number;
    timestamp?: number | string;
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

  /** @param tradeId - The ID for this context */
  public withTradeId(tradeId: string | number): UserTradeIdContext {
    return new UserTradeIdContext(this.requester, tradeId);
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserCompetitionResponse> {
    const path = `/user/${this.contextId}/competition`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get discord information for a specific user
   * @param params - Optional query parameters
   */
  public async discord(params?: {
    timestamp?: number | string;
  }): Promise<UserDiscordResponse> {
    const path = `/user/${this.contextId}/discord`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
  public async hof(params?: {
    timestamp?: number | string;
  }): Promise<UserHofResponse> {
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
    timestamp?: number | string;
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
  public async job(params?: {
    timestamp?: number | string;
  }): Promise<UserJobResponse> {
    const path = `/user/${this.contextId}/job`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get medals achieved by a specific player
   * @param params - Optional query parameters
   */
  public async medals(params?: {
    timestamp?: number | string;
  }): Promise<UserMedalsResponse> {
    const path = `/user/${this.contextId}/medals`;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
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
    timestamp?: number | string;
  }): Promise<UserCrimesResponse> {
    const path = `/user/${this.contextId}/crimes`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for User API endpoints that require a "tradeId"
 * @category Endpoints
 */
export class UserTradeIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get your detailed trade
   * @param params - Optional query parameters
   */
  public async trade(params?: {
    timestamp?: number | string;
  }): Promise<UserTradeResponse> {
    const path = `/user/${this.contextId}/trade`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
