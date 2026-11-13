import type { UserTravelInventoryItem } from ".";

/** @category Models */
export type UserTravelInventorySlot = {
  id: number;
  item: UserTravelInventoryItem | null;
};
