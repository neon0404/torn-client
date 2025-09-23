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
  rarity: "yellow" | "orange" | "red" | null;
  uid: ItemUid | null;
  stats: ItemMarketListingItemStats | null;
  bonuses: ItemMarketListingItemBonus[];
};
