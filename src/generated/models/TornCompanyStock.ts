import type { CompanyStockId } from ".";

/** @category Models */
export type TornCompanyStock = {
  id: CompanyStockId;
  name: string;
  cost: number;
  rrp: number;
};
