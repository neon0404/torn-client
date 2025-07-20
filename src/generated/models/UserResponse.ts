import type {
  FactionAttacksFullResponse,
  FactionAttacksResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
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
  UserItemMarketResponse,
  UserJobRanksResponse,
  UserListResponse,
  UserLookupResponse,
  UserOrganizedCrimeResponse,
  UserPersonalStatsResponse,
  UserPropertiesResponse,
  UserRacesResponse,
  UserRacingRecordsResponse,
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
  | RevivesResponse
  | RevivesFullResponse
  | UserItemMarketResponse
  | UserListResponse
  | UserPersonalStatsResponse
  | UserOrganizedCrimeResponse
  | FactionAttacksResponse
  | FactionAttacksFullResponse
  | UserLookupResponse
  | TimestampResponse;
