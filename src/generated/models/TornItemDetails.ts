import type {
  ItemId,
  ItemMarketListingItemDetails,
  TornItemTypeEnum,
  TornItemWeaponTypeEnum,
} from ".";

/** @category Models */
export type TornItemDetails = ItemMarketListingItemDetails & {
  id: ItemId;
  name: string;
  type: TornItemTypeEnum;
  sub_type: TornItemWeaponTypeEnum | null;
};
