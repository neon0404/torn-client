import type { RequestMetadataWithLinks, UserItemMarketListing } from ".";

/** @category Models */
export type UserItemMarketResponse = {
  itemmarket: UserItemMarketListing[];
  _metadata: RequestMetadataWithLinks;
};
