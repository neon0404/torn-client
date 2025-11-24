import type { AmmoId, UserAmmoType } from ".";

/** @category Models */
export type UserAmmo = {
  id: AmmoId;
  name: string;
  types: UserAmmoType[];
};
