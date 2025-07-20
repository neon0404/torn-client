import type { ItemId } from ".";

/** @category Models */
export type ItemMarketItem = {
  id: ItemId;
  name: string;
  type: string;
  average_price: number;
};
