import type { CityShopId, TornCityShopItem } from ".";

/** @category Models */
export type TornCityShop = {
  id: CityShopId;
  name: string;
  items: TornCityShopItem[];
};
