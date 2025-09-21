import type {
  FactionAttacksFullResponse,
  FactionAttacksResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
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
  UserItemMarketResponse,
  UserJobPointsResponse,
  UserJobRanksResponse,
  UserJobResponse,
  UserListResponse,
  UserLookupResponse,
  UserMedalsResponse,
  UserMeritsResponse,
  UserMessagesResponse,
  UserMoneyResponse,
  UserNewEventsResponse,
  UserNewMessagesResponse,
  UserNotificationsResponse,
  UserOrganizedCrimeResponse,
  UserPersonalStatsResponse,
  UserProfileResponse,
  UserPropertiesResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
  UserRefillsResponse,
  UserSkillsResponse,
  UserTravelResponse,
  UserVirusResponse,
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
  | UserBarsResponse
  | UserCooldownsResponse
  | UserNotificationsResponse
  | UserRefillsResponse
  | UserTravelResponse
  | UserVirusResponse
  | FactionAttacksFullResponse
  | UserMoneyResponse
  | UserJobPointsResponse
  | UserWorkStatsResponse
  | UserSkillsResponse
  | UserBattleStatsResponse
  | UserNewEventsResponse
  | UserEventsResponse
  | UserMessagesResponse
  | UserNewMessagesResponse
  | UserLookupResponse
  | TimestampResponse;
