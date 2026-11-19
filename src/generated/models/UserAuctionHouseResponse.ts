import type { RequestMetadataWithLinks, UserAuctionHouseListing } from ".";

/** @category Models */
export type UserAuctionHouseResponse = {
  auctionhouse: UserAuctionHouseListing[];
  _metadata: RequestMetadataWithLinks;
};
