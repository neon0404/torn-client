import type {
  FactionAttacksFullResponse,
  FactionAttacksResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
  UserBasicResponse,
  UserBattleStatsResponse,
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
  UserHonorsResponse,
  UserItemMarketResponse,
  UserJobPointsResponse,
  UserJobRanksResponse,
  UserListResponse,
  UserLookupResponse,
  UserMedalsResponse,
  UserMeritsResponse,
  UserMoneyResponse,
  UserOrganizedCrimeResponse,
  UserPersonalStatsResponse,
  UserPropertiesResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
  UserSkillsResponse,
  UserWorkStatsResponse,
} from ".";

/** @category Models */
export type UserResponse =
  | UserCrimesResponse
  | UserRacesResponse
  | UserEnlistedCarsResponse
  | UserForumPostsResponse
  | UserForumThreadsResponse
  | UserForumSubscribedThreadsResponse
  | UserForumFeedResponse
  | UserForumFriendsResponse
  | UserHofResponse
  | UserCalendarResponse
  | UserRacingRecordsResponse
  | UserEducationResponse
  | UserBountiesResponse
  | UserJobRanksResponse
  | UserPropertiesResponse
  | UserFactionBalanceResponse
  | UserBasicResponse
  | RevivesResponse
  | UserHonorsResponse
  | UserMedalsResponse
  | UserMeritsResponse
  | RevivesFullResponse
  | UserItemMarketResponse
  | UserListResponse
  | UserPersonalStatsResponse
  | UserOrganizedCrimeResponse
  | FactionAttacksResponse
  | FactionAttacksFullResponse
  | UserMoneyResponse
  | UserJobPointsResponse
  | UserWorkStatsResponse
  | UserSkillsResponse
  | UserBattleStatsResponse
  | UserLookupResponse
  | TimestampResponse;
