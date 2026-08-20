import type { CountryEnum, ShopNameEnum } from ".";

/** @category Models */
export type TornItemShop = {
  country: CountryEnum;
  shop: ShopNameEnum;
  buy_price: number | null;
  sell_price: number | null;
};
