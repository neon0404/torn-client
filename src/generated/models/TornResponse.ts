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
  TornItemAmmoResponse,
  TornItemModsResponse,
  TornItemsResponse,
  TornLogCategoriesResponse,
  TornLogTypesResponse,
  TornLookupResponse,
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
