import type { UserInventoryItem } from ".";

/** @category Models */
export type UserInventory = {
  items: UserInventoryItem[];
  timestamp: number;
};
