import type { ItemId, ItemUid } from ".";

/** @category Models */
export type UserTravelInventoryItem = {
  id: ItemId;
  uid: ItemUid | null;
  is_equipped: boolean;
  name: string;
  type: string;
  is_faction_owned: boolean;
  is_permanent: boolean;
};
