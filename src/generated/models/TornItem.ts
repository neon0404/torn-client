import type {
  ItemId,
  TornItemArmorDetails,
  TornItemShop,
  TornItemTypeEnum,
  TornItemWeaponDetails,
  TornItemWeaponTypeEnum,
} from ".";

/** @category Models */
export type TornItem = {
  id: ItemId;
  name: string;
  description: string;
  effect: string | null;
  requirement: string | null;
  image: string;
  type: TornItemTypeEnum;
  sub_type: TornItemWeaponTypeEnum | null;
  is_masked: boolean;
  is_tradable: boolean;
  is_found_in_city: boolean;
  value: {
    vendor?: {
      country: string;
      name: string;
    } | null;
    shops: TornItemShop[];
    buy_price?: number | null;
    sell_price?: number | null;
    market_price: number;
  };
  circulation: number;
  details: TornItemWeaponDetails | TornItemArmorDetails | null;
};
