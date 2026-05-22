import type {
  AttacksFullResponse,
  AttacksResponse,
  FactionApplicationsResponse,
  FactionBalanceResponse,
  FactionBasicResponse,
  FactionChainReportResponse,
  FactionChainsResponse,
  FactionContributorsResponse,
  FactionCrimeResponse,
  FactionCrimesResponse,
  FactionHofResponse,
  FactionLookupResponse,
  FactionMembersResponse,
  FactionOngoingChainResponse,
  FactionPositionsResponse,
  FactionRacketsResponse,
  FactionRaidWarReportResponse,
  FactionRaidsResponse,
  FactionRankedWarReportResponse,
  FactionRankedWarResponse,
  FactionStatsResponse,
  FactionTerritoriesOwnershipResponse,
  FactionTerritoriesResponse,
  FactionTerritoryWarReportResponse,
  FactionTerritoryWarsHistoryResponse,
  FactionUpgradesResponse,
  FactionWarfareResponse,
  FactionWarsResponse,
  NewsResponse,
  RevivesFullResponse,
  RevivesResponse,
  TimestampResponse,
} from ".";

/** @category Models */
export type FactionResponse =
  | FactionHofResponse
  | FactionMembersResponse
  | FactionBasicResponse
  | FactionWarsResponse
  | NewsResponse
  | RevivesResponse
  | FactionTerritoryWarsHistoryResponse
  | AttacksResponse
  | FactionBalanceResponse
  | FactionRaidWarReportResponse
  | FactionTerritoriesOwnershipResponse
  | FactionPositionsResponse
  | RevivesFullResponse
  | AttacksFullResponse
  | FactionApplicationsResponse
  | FactionOngoingChainResponse
  | FactionChainsResponse
  | FactionChainReportResponse
  | FactionCrimesResponse
  | FactionCrimeResponse
  | FactionRaidsResponse
  | FactionWarfareResponse
  | FactionRankedWarReportResponse
  | FactionTerritoryWarReportResponse
  | FactionTerritoriesResponse
  | FactionUpgradesResponse
  | FactionStatsResponse
  | FactionContributorsResponse
  | FactionRacketsResponse
  | FactionRankedWarResponse
  | FactionLookupResponse
  | TimestampResponse;
