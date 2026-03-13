import type { RequestMetadataWithLinks, UserTrade } from ".";

/** @category Models */
export type UserTradesResponse = {
  trades: UserTrade[];
  _metadata: RequestMetadataWithLinks;
};
