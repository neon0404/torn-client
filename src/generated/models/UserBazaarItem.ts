import type {
  ItemId,
  TornInventoryItemType,
  UserArmouryItemDetails,
  UserBazaarItemUid,
} from ".";

/** @category Models */
export type UserBazaarItem = {
  id: ItemId;
  uids: UserBazaarItemUid[];
  name: string;
  type: TornInventoryItemType;
  quantity: number;
  price: number | null;
  market_price: number;
  item_details: UserArmouryItemDetails | null;
};
