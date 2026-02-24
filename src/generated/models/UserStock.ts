import type { StockId, UserStockTransaction } from ".";

/** @category Models */
export type UserStock = {
  id: StockId;
  shares: number;
  transactions: UserStockTransaction[];
  bonus: {
    available: boolean;
    increment: number;
    progress: number;
    frequency: number;
  };
};
