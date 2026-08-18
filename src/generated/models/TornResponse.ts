import type {
  AttackLogResponse,
  TimestampResponse,
  TornBountiesResponse,
  TornCalendarResponse,
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
  TornItemsResponse,
  TornLogCategoriesResponse,
  TornLogTypesResponse,
  TornLookupResponse,
  TornMedalsResponse,
  TornMeritsResponse,
  TornMuseumResponse,
  TornOrganizedCrimeResponse,
  TornProperties,
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
  | TornItemsResponse
  | TornLogCategoriesResponse
  | TornEducationResponse
  | TornMeritsResponse
  | TornOrganizedCrimeResponse
  | TornHonorsResponse
  | TornItemDetailsResponse
  | TornEliminationTeamsResponse
  | TornEliminationTeamPlayersResponse
  | TornMedalsResponse
  | TornBountiesResponse
  | TornGymsResponse
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
