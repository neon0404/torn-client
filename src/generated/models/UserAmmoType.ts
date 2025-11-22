import type { TornItemAmmoTypeEnum } from ".";

/** @category Models */
export type UserAmmoType = {
  name: TornItemAmmoTypeEnum;
  quantity: number;
  equipped: boolean;
};
