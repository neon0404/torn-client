import type {
  ItemMarketListingItemBonus,
  ItemMarketListingItemStats,
  ItemUid,
} from ".";

/** @category Models */
export type UserItemMarkeListingItemDetails = {
  id: number;
  name: string;
  type: string;
  rarity: "yellow" | "orange" | "red" | unknown;
  uid: ItemUid | unknown;
  stats: ItemMarketListingItemStats | unknown;
  bonuses: ItemMarketListingItemBonus[];
};
