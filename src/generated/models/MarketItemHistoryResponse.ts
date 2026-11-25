import type { MarketHistoryEntry, RequestMetadataWithLinks } from ".";

/** @category Models */
export type MarketItemHistoryResponse = {
  itemhistory: MarketHistoryEntry[];
  _metadata: RequestMetadataWithLinks;
};
