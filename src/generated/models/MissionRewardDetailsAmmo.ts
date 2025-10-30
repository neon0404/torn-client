import type { AmmoId, TornItemAmmoTypeEnum } from ".";

/** @category Models */
export type MissionRewardDetailsAmmo = {
  id: AmmoId;
  name: string;
  type: TornItemAmmoTypeEnum;
};
