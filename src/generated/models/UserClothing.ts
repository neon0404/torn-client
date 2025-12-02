import type { ItemId, ItemUid, TornItemTypeEnum } from ".";

/** @category Models */
export type UserClothing = {
  id: ItemId;
  name: string;
  uid: ItemUid;
  type: TornItemTypeEnum;
};
