import type { ItemId, TornItemTypeEnum, TornItemWeaponTypeEnum } from ".";

/** @category Models */
export type MissionRewardDetailsItem = {
  id: ItemId;
  name: string;
  type: TornItemTypeEnum;
  sub_type: TornItemWeaponTypeEnum | null;
};
