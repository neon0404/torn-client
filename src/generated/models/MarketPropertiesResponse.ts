import type { MarketPropertyDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type MarketPropertiesResponse = {
  properties: MarketPropertyDetails;
  properties_timestamp: number;
  _metadata: RequestMetadataWithLinks;
};
