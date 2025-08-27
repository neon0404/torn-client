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
  TornItemModsResponse,
  TornItemsResponse,
  TornLogCategoriesResponse,
  TornLogTypesResponse,
  TornLookupResponse,
  TornMedalsResponse,
  TornMeritsResponse,
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
  | TornHonorsResponse
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
