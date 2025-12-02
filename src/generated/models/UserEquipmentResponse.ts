import type { UserClothing, UserEquipment } from ".";

/** @category Models */
export type UserEquipmentResponse = {
  equipment: UserEquipment[];
  clothing: UserClothing[];
};
