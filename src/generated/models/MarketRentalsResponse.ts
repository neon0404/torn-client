import type { MarketRentalDetails, RequestMetadataWithLinksAndTotal } from ".";

/** @category Models */
export type MarketRentalsResponse = {
  rentals: MarketRentalDetails;
  rentals_timestamp: number;
  rentals_delay?: number;
  _metadata: RequestMetadataWithLinksAndTotal;
};
