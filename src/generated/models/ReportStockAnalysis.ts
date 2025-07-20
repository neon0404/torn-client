import type { CountryEnum, ItemId } from ".";

/** @category Models */
export type ReportStockAnalysis = {
  items: {
    country: CountryEnum;
    item: {
      id: ItemId;
      name: string;
      price: number;
      value: number;
      due: number | unknown;
    };
    trip_duration: number;
    hourly_profit: number;
  }[];
};
