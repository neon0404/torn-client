import type {
  BazaarResponse,
  BazaarResponseSpecialized,
  MarketItemMarketResponse,
  MarketLookupResponse,
  MarketPropertiesResponse,
  MarketRentalsResponse,
  TimestampResponse,
} from ".";

/** @category Models */
export type MarketResponse =
  | BazaarResponse
  | BazaarResponseSpecialized
  | MarketItemMarketResponse
  | MarketRentalsResponse
  | MarketPropertiesResponse
  | MarketLookupResponse
  | TimestampResponse;
