import type { ItemId, ItemUid, UserId } from ".";

/** @category Models */
export type TradeItemItem = {
  user_id: UserId;
  type: "Item";
  details: {
    id: ItemId;
    uid: ItemUid | null;
    amount: number;
  };
};
