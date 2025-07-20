import type {
  ItemMarketItem,
  ItemMarketListingNonstackable,
  ItemMarketListingStackable,
} from ".";

/** @category Models */
export type ItemMarket = {
  item: ItemMarketItem;
  listings: ItemMarketListingNonstackable | ItemMarketListingStackable[];
  cache_timestamp: number;
};
