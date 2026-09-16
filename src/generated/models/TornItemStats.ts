import type {
  ItemId,
  ItemUid,
  TornItemStat,
  TornItemStatTitleEnum,
  TornItemTypeEnum,
  TornItemWeaponTypeEnum,
} from ".";

/** @category Models */
export type TornItemStats = {
  id: ItemId;
  uid: ItemUid;
  name: TornItemStatTitleEnum;
  type: TornItemTypeEnum;
  sub_type: TornItemWeaponTypeEnum | null;
  stats: TornItemStat[];
};
