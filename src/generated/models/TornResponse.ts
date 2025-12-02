import type {
  AttackLogResponse,
  TimestampResponse,
  TornBountiesResponse,
  TornCalendarResponse,
  TornCrimesResponse,
  TornEducationResponse,
  TornFactionHofResponse,
  TornFactionTreeResponse,
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
  TornOrganizedCrimeResponse,
  TornProperties,
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
  | TornMedalsResponse
  | TornBountiesResponse
  | TornItemAmmoResponse
  | TornProperties
  | TornFactionTreeResponse
  | AttackLogResponse
  | TornTerritoriesResponse
  | TornTerritoriesNoLinksResponse
  | TornItemModsResponse
  | TornLookupResponse
  | TimestampResponse;
