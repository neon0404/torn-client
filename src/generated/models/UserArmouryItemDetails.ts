import type { ItemMarketListingItemBonus, ItemMarketListingItemStats } from ".";

/** @category Models */
export type UserArmouryItemDetails = {
  stats: ItemMarketListingItemStats | null;
  bonuses: ItemMarketListingItemBonus[];
  rarity: "yellow" | "orange" | "red" | null;
};
