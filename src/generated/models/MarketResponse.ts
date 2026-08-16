import type {
  AuctionHouseListingResponse,
  AuctionHouseResponse,
  BazaarResponse,
  BazaarResponseSpecialized,
  MarketItemMarketResponse,
  MarketLookupResponse,
  MarketPropertiesResponse,
  MarketRentalsResponse,
  PointsMarketResponse,
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
  | PointsMarketResponse
  | MarketPropertiesResponse
  | MarketLookupResponse
  | TimestampResponse;
