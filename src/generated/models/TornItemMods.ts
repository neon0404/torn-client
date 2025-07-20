import type { ItemModId, TornItemWeaponTypeEnum } from ".";

/** @category Models */
export type TornItemMods = {
  id: ItemModId;
  name: string;
  description: string;
  dual_fit: boolean;
  weapons: TornItemWeaponTypeEnum[];
};
