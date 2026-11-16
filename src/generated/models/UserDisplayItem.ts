import type {
  ItemId,
  ItemUid,
  TornInventoryItemType,
  UserArmouryItemDetails,
} from ".";

/** @category Models */
export type UserDisplayItem = {
  id: ItemId;
  uids: ItemUid[];
  name: string;
  type: TornInventoryItemType;
  quantity: number;
  circulation: number;
  market_price: number;
  item_details: UserArmouryItemDetails | null;
};
