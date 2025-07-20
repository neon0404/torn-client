import type {
  FactionApplicationsResponse,
  FactionAttacksFullResponse,
  FactionAttacksResponse,
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
  FactionNewsResponse,
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
  FactionTerritoryWarsResponse,
  FactionUpgradesResponse,
  FactionWarfareResponse,
  FactionWarsResponse,
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
  | FactionNewsResponse
  | RevivesResponse
  | FactionTerritoryWarsHistoryResponse
  | FactionAttacksResponse
  | FactionBalanceResponse
  | FactionRaidWarReportResponse
  | FactionTerritoriesOwnershipResponse
  | FactionPositionsResponse
  | RevivesFullResponse
  | FactionAttacksFullResponse
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
  | FactionTerritoryWarsResponse
  | FactionContributorsResponse
  | FactionRacketsResponse
  | FactionRankedWarResponse
  | FactionLookupResponse
  | TimestampResponse;
