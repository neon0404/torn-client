import type { TornStock, TornStockHistory, TornStockPerformance } from ".";

/** @category Models */
export type TornStockDetailed = TornStock & {
  chart: {
    performance: {
      last_hour: TornStockPerformance;
      last_day: TornStockPerformance;
      last_week: TornStockPerformance;
      last_month: TornStockPerformance;
      last_year: TornStockPerformance;
      all_time: TornStockPerformance;
    };
    history: TornStockHistory[];
  };
};
