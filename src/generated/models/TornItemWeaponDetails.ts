import type {
  AmmoId,
  ItemModId,
  TornItemBaseStats,
  TornItemWeaponCategoryEnum,
} from ".";

/** @category Models */
export type TornItemWeaponDetails = {
  stealth_level: number;
  base_stats: TornItemBaseStats;
  category: TornItemWeaponCategoryEnum;
  ammo:
    | {
        id: AmmoId;
        name: string;
        magazine_rounds: number;
        rate_of_fire: {
          minimum: number;
          maximum: number;
        };
      }
    | unknown;
  mods: ItemModId[];
};
