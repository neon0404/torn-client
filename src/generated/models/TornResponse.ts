import type {
  AttackLogResponse,
  TimestampResponse,
  TornBankResponse,
  TornBountiesResponse,
  TornCalendarResponse,
  TornCardsResponse,
  TornCityShopsResponse,
  TornCityStatsResponse,
  TornCrimesResponse,
  TornEducationResponse,
  TornEliminationTeamPlayersResponse,
  TornEliminationTeamsResponse,
  TornFactionHofResponse,
  TornFactionTreeResponse,
  TornGymsResponse,
  TornHofResponse,
  TornHonorsResponse,
  TornItemAmmoResponse,
  TornItemDetailsResponse,
  TornItemModsResponse,
  TornItemStatsResponse,
  TornItemsResponse,
  TornLogCategoriesResponse,
  TornLogTypesResponse,
  TornLookupResponse,
  TornMedalsResponse,
  TornMeritsResponse,
  TornMuseumResponse,
  TornOrganizedCrimeResponse,
  TornPokerTablesResponse,
  TornProperties,
  TornRockPaperScissorsResponse,
  TornStockDetailedResponse,
  TornStocksResponse,
  TornSubcrimesResponse,
  TornTerritoriesNoLinksResponse,
  TornTerritoriesResponse,
} from ".";

/** @category Models */
export type TornResponse =
  | TornSubcrimesResponse
  | TornCrimesResponse
  | TornCalendarResponse
  | TornHofResponse
  | TornFactionHofResponse
  | TornLogTypesResponse
  | TornCardsResponse
  | TornItemsResponse
  | TornRockPaperScissorsResponse
  | TornCityStatsResponse
  | TornLogCategoriesResponse
  | TornEducationResponse
  | TornMeritsResponse
  | TornOrganizedCrimeResponse
  | TornItemStatsResponse
  | TornHonorsResponse
  | TornItemDetailsResponse
  | TornEliminationTeamsResponse
  | TornCityShopsResponse
  | TornEliminationTeamPlayersResponse
  | TornMedalsResponse
  | TornBankResponse
  | TornBountiesResponse
  | TornGymsResponse
  | TornPokerTablesResponse
  | TornItemAmmoResponse
  | TornProperties
  | TornFactionTreeResponse
  | AttackLogResponse
  | TornMuseumResponse
  | TornStockDetailedResponse
  | TornStocksResponse
  | TornTerritoriesResponse
  | TornTerritoriesNoLinksResponse
  | TornItemModsResponse
  | TornLookupResponse
  | TimestampResponse;
