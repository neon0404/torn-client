import type { MarketRentalDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type MarketRentalsResponse = {
  rentals: MarketRentalDetails;
  rentals_timestamp: number;
  _metadata: RequestMetadataWithLinks;
};
