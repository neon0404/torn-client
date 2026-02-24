import type { StockId } from ".";

/** @category Models */
export type TornStock = {
  id: StockId;
  name: string;
  acronym: string;
  images: {
    logo: string;
    full: string;
  };
  market: {
    price: number;
    cap: number;
    shares: number;
    investors: number;
  };
  bonus: {
    passive: boolean;
    frequency: number;
    requirement: number;
    description: string;
  };
};
