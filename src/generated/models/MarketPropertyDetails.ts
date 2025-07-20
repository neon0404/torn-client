import type { BasicProperty, PropertyModificationEnum } from ".";

/** @category Models */
export type MarketPropertyDetails = {
  listings: {
    happy: number;
    cost: number;
    market_price: number;
    upkeep: number;
    modifications: PropertyModificationEnum[];
  }[];
  property: BasicProperty;
};
