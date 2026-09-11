import type {
  ItemId,
  ItemUid,
  MarketSpecializedBazaarCategoryEnum,
  UserId,
} from ".";

/** @category Models */
export type FactionInventoryItem = {
  id: ItemId;
  name: string;
  type: MarketSpecializedBazaarCategoryEnum;
  amount: number;
  uids: ItemUid[];
  loaned: {
    id: UserId;
    name: string;
  } | null;
};
