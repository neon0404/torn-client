import type {
  TornItemDetails,
  UserEquipmentAmmo,
  UserEquipmentItemMod,
} from ".";

/** @category Models */
export type UserEquipment = TornItemDetails & {
  slot: number;
  mods: UserEquipmentItemMod[];
  ammo: UserEquipmentAmmo | null;
};
