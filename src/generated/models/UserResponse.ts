import type {
  AttacksFullResponse,
  AttacksResponse,
  ReportsResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
  UserAmmoResponse,
  UserAuctionHouseResponse,
  UserBarsResponse,
  UserBasicResponse,
  UserBattleStatsResponse,
  UserBazaarResponse,
  UserBountiesResponse,
  UserCalendarResponse,
  UserCasinoResponse,
  UserCompetitionResponse,
  UserCooldownsResponse,
  UserCrimesResponse,
  UserDiscordResponse,
  UserDisplayResponse,
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
  UserHalloweenResponse,
  UserHofResponse,
  UserHonorsResponse,
  UserIconsResponse,
  UserInventoryResponse,
  UserItemMarketResponse,
  UserItemModsResponse,
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
  UserNetworthResponse,
  UserNewEventsResponse,
  UserNewMessagesResponse,
  UserNotificationsResponse,
  UserOrganizedCrimeResponse,
  UserPerksResponse,
  UserPersonalStatsResponse,
  UserProfileResponse,
  UserPropertiesResponse,
  UserPropertyResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
  UserRefillsResponse,
  UserSkillsResponse,
  UserStocksResponse,
  UserTradeResponse,
  UserTradesResponse,
  UserTravelInventoryResponse,
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
  | UserPropertyResponse
  | ReportsResponse
  | UserHofResponse
  | UserCalendarResponse
  | UserRacingRecordsResponse
  | UserEducationResponse
  | UserStocksResponse
  | UserBountiesResponse
  | UserJobRanksResponse
  | UserPropertiesResponse
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
  | UserEquipmentResponse
  | UserMissionsResponse
  | UserPersonalStatsResponse
  | UserOrganizedCrimeResponse
  | UserItemModsResponse
  | AttacksResponse
  | UserBarsResponse
  | UserCooldownsResponse
  | UserNotificationsResponse
  | UserPerksResponse
  | UserRefillsResponse
  | UserTravelResponse
  | UserTravelInventoryResponse
  | UserVirusResponse
  | AttacksFullResponse
  | UserCasinoResponse
  | UserHalloweenResponse
  | UserNetworthResponse
  | UserMoneyResponse
  | UserJobPointsResponse
  | UserWorkStatsResponse
  | UserSkillsResponse
  | UserBattleStatsResponse
  | UserGymResponse
  | UserTradeResponse
  | UserTradesResponse
  | UserNewEventsResponse
  | UserEventsResponse
  | UserMessagesResponse
  | UserNewMessagesResponse
  | UserInventoryResponse
  | UserBazaarResponse
  | UserDisplayResponse
  | UserAuctionHouseResponse
  | UserLookupResponse
  | TimestampResponse;
