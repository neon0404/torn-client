import type {
  AuctionHouseListingResponse,
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
  | AuctionHouseListingResponse
  | MarketPropertiesResponse
  | MarketLookupResponse
  | TimestampResponse;
