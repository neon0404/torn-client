import type {
  ItemMarketListingItemBonus,
  ItemMarketListingItemStats,
  ItemUid,
} from ".";

/** @category Models */
export type ItemMarketListingItemDetails = {
  uid: ItemUid;
  stats: ItemMarketListingItemStats;
  bonuses: ItemMarketListingItemBonus[];
  rarity: "yellow" | "orange" | "red" | unknown;
};
