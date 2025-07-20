import type {
  ItemId,
  TornItemArmorDetails,
  TornItemTypeEnum,
  TornItemWeaponDetails,
  TornItemWeaponTypeEnum,
} from ".";

/** @category Models */
export type TornItem = {
  id: ItemId;
  name: string;
  description: string;
  effect: string | unknown;
  requirement: string | unknown;
  image: string;
  type: TornItemTypeEnum;
  sub_type: TornItemWeaponTypeEnum | unknown;
  is_masked: boolean;
  is_tradable: boolean;
  is_found_in_city: boolean;
  value: {
    vendor:
      | {
          country: string;
          name: string;
        }
      | unknown;
    buy_price: number | unknown;
    sell_price: number | unknown;
    market_price: number;
  };
  circulation: number;
  details: TornItemWeaponDetails | TornItemArmorDetails | unknown;
};
