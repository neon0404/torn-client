import type {
  ItemMarketListingItemBonus,
  ItemMarketListingItemStats,
  ItemUid,
} from ".";

/** @category Models */
export type ItemMarketListingItemDetails = {
  uid: ItemUid;
  stats: ItemMarketListingItemStats | null;
  bonuses: ItemMarketListingItemBonus[];
  rarity: "yellow" | "orange" | "red" | null;
};
