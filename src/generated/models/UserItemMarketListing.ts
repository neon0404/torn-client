import type { UserItemMarkeListingItemDetails } from ".";

/** @category Models */
export type UserItemMarketListing = {
  id: number;
  price: number;
  average_price: number;
  amount: number;
  is_anonymous: boolean;
  available: number;
  item: UserItemMarkeListingItemDetails;
};
