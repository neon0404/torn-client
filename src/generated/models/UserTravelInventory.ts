import type { UserTravelInventoryCapacity, UserTravelInventorySlot } from ".";

/** @category Models */
export type UserTravelInventory = {
  capacity: UserTravelInventoryCapacity;
  inventory: UserTravelInventorySlot[];
};
