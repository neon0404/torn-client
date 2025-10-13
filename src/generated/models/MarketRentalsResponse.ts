import type { MarketRentalDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type MarketRentalsResponse = {
  rentals: MarketRentalDetails;
  _metadata: RequestMetadataWithLinks;
};
