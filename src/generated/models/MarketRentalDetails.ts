import type { BasicProperty, PropertyModificationEnum } from ".";

/** @category Models */
export type MarketRentalDetails = {
  listings: {
    happy: number;
    cost: number;
    cost_per_day: number;
    rental_period: number;
    market_price: number;
    upkeep: number;
    modifications: PropertyModificationEnum[];
  }[];
  property: BasicProperty;
};
