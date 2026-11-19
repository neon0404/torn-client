import type { AuctionHouseListing, RequestMetadataWithLinks } from ".";

/** @category Models */
export type AuctionHouseResponse = {
  auctionhouse: AuctionHouseListing[];
  auctionhouse_timestamp?: number;
  auctionhouse_delay?: number;
  _metadata: RequestMetadataWithLinks;
};
