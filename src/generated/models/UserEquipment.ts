import type {
  AmmoId,
  TornItemAmmoTypeEnum,
  TornItemDetails,
  UserEquipmentItemMod,
} from ".";

/** @category Models */
export type UserEquipment = TornItemDetails & {
  slot: number;
  mods: UserEquipmentItemMod[];
  ammo: {
    id: AmmoId;
    name: string;
    quantity: number;
    type: TornItemAmmoTypeEnum;
  };
};
