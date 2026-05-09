import type { ItemModId, TornItemWeaponTypeEnum } from ".";

/** @category Models */
export type TornItemMods = {
  id: ItemModId;
  name: string;
  image: string;
  description: string;
  dual_fit: boolean;
  weapons: TornItemWeaponTypeEnum[];
};
