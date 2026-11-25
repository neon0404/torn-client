import type { MarketHistoryEntry, RequestMetadataWithLinks } from ".";

/** @category Models */
export type MarketPointsHistoryResponse = {
  pointshistory: MarketHistoryEntry[];
  _metadata: RequestMetadataWithLinks;
};
