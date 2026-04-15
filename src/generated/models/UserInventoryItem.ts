import type { ItemId, ItemUid } from ".";

/** @category Models */
export type UserInventoryItem = {
  id: ItemId;
  amount: number;
  equipped: boolean;
  name: string;
  faction_owned: boolean;
  uid: ItemUid | null;
};
