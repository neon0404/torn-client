import type { CountryEnum, ItemId } from ".";

/** @category Models */
export type ReportStockAnalysis = {
  items: {
    country: CountryEnum;
    item: {
      id: ItemId;
      name: string;
      stock: number;
      price: number;
      value: number;
      due: number | null;
    };
    trip_duration: number;
    hourly_profit: number;
    restock_timestamp: number | null;
  }[];
};
