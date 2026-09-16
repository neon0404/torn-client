import type { ItemId } from ".";

/** @category Models */
export type TornCityShopItem = {
  id: ItemId;
  name: string;
  price: number;
  stock: {
    current: number;
    default: number;
  };
};
