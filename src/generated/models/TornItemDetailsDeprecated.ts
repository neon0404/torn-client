import type {
  ItemId,
  ItemMarketListingItemDetails,
  TornItemTypeEnum,
  TornItemWeaponTypeEnum,
} from ".";

/**
 * This object is deprecated, and starting on 1st January 2027 it will be replaced with an array of TornItemDetails.
 * @category Models
 */
export type TornItemDetailsDeprecated = ItemMarketListingItemDetails & {
  id: ItemId;
  name: string;
  type: TornItemTypeEnum;
  sub_type: TornItemWeaponTypeEnum | null;
};
