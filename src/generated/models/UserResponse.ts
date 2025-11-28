import type {
  FactionAttacksFullResponse,
  FactionAttacksResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
  UserAmmoResponse,
  UserBarsResponse,
  UserBasicResponse,
  UserBattleStatsResponse,
  UserBountiesResponse,
  UserCalendarResponse,
  UserCompetitionResponse,
  UserCooldownsResponse,
  UserCrimesResponse,
  UserDiscordResponse,
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
  UserMissionsResponse,
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
  UserWeaponExpResponse,
  UserWorkStatsResponse,
} from ".";

/** @category Models */
export type UserResponse =
  | UserCrimesResponse
  | UserWeaponExpResponse
  | UserAmmoResponse
  | UserDiscordResponse
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
  | UserMissionsResponse
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
