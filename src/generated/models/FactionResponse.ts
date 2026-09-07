import type {
  AttacksFullResponse,
  AttacksResponse,
  FactionApplicationsResponse,
  FactionBalanceResponse,
  FactionBasicResponse,
  FactionChainReportResponse,
  FactionChainsResponse,
  FactionContributorsResponse,
  FactionCrimeExpResponse,
  FactionCrimeResponse,
  FactionCrimesResponse,
  FactionHofResponse,
  FactionInventoryResponse,
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
  FactionWarfareChainsResponse,
  FactionWarfareDirtyBombsResponse,
  FactionWarfareRaidsResponse,
  FactionWarfareRankedResponse,
  FactionWarfareResponse,
  FactionWarfareTerritoryWarsResponse,
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
  | FactionInventoryResponse
  | FactionCrimeExpResponse
  | FactionRacketsResponse
  | FactionRankedWarResponse
  | FactionLookupResponse
  | FactionWarfareDirtyBombsResponse
  | FactionWarfareChainsResponse
  | FactionWarfareTerritoryWarsResponse
  | FactionWarfareRaidsResponse
  | FactionWarfareRankedResponse
  | TimestampResponse;
