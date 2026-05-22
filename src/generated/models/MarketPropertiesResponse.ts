import type {
  MarketPropertyDetails,
  RequestMetadataWithLinksAndTotal,
} from ".";

/** @category Models */
export type MarketPropertiesResponse = {
  properties: MarketPropertyDetails;
  properties_timestamp: number;
  properties_delay?: number;
  _metadata: RequestMetadataWithLinksAndTotal;
};
