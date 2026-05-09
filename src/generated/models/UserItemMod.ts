import type { ItemModId, ItemUid } from ".";

/** @category Models */
export type UserItemMod = {
  id: ItemModId;
  title: string;
  equipped: boolean;
  equipped_item_uid: ItemUid | null;
};
