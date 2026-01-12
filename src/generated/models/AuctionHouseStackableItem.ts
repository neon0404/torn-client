import type { ItemId, ItemUid, TornItemTypeEnum } from ".";

/** @category Models */
export type AuctionHouseStackableItem = {
  id: ItemId;
  uid: ItemUid;
  name: string;
  type: TornItemTypeEnum;
};
