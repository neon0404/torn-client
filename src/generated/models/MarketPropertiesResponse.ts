import type { MarketPropertyDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type MarketPropertiesResponse = {
  properties: MarketPropertyDetails;
  _metadata: RequestMetadataWithLinks;
};
