import type { CompanyStockId } from ".";

/** @category Models */
export type CompanyStockItem = {
  name: string;
  id: CompanyStockId;
  cost: number;
  rrp: number;
  price: number;
  in_stock: number;
  on_order: number;
  sold_amount: number;
  sold_worth: number;
};
