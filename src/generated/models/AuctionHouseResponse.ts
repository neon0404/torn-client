import type { AuctionHouseListing, RequestMetadataWithLinks } from ".";

/** @category Models */
export type AuctionHouseResponse = {
  auctionhouse: AuctionHouseListing[];
  _metadata: RequestMetadataWithLinks;
};
