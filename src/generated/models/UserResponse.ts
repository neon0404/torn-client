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
  UserCompetitionResponse,
  UserCrimesResponse,
  UserEducationResponse,
  UserEnlistedCarsResponse,
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
  UserItemMarketResponse,
  UserJobPointsResponse,
  UserJobRanksResponse,
  UserJobResponse,
  UserListResponse,
  UserLookupResponse,
  UserMedalsResponse,
  UserMeritsResponse,
  UserMoneyResponse,
  UserOrganizedCrimeResponse,
  UserPersonalStatsResponse,
  UserProfileResponse,
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
  | UserProfileResponse
  | UserJobResponse
  | UserFactionResponse
  | UserCompetitionResponse
  | UserIconsResponse
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
