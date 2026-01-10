import type {
  AuctionHouseListing,
  AuctionHouseResponse,
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
  | AuctionHouseResponse
  | AuctionHouseListing
  | MarketPropertiesResponse
  | MarketLookupResponse
  | TimestampResponse;
