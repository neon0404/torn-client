import type { AmmoId, TornItemAmmoTypeEnum } from ".";

/** @category Models */
export type TornItemAmmo = {
  id: AmmoId;
  name: string;
  price: number;
  types: TornItemAmmoTypeEnum[];
};
