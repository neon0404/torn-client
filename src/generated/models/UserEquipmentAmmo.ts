import type { AmmoId, TornItemAmmoTypeEnum } from ".";

/** @category Models */
export type UserEquipmentAmmo = {
  id: AmmoId;
  name: string;
  quantity: number;
  type: TornItemAmmoTypeEnum;
};
