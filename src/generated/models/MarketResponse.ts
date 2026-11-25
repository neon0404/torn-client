import type {
  AuctionHouseListingResponse,
  AuctionHouseResponse,
  BazaarResponse,
  BazaarResponseSpecialized,
  MarketItemHistoryResponse,
  MarketItemMarketResponse,
  MarketLookupResponse,
  MarketPointsHistoryResponse,
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
  | MarketItemHistoryResponse
  | MarketPointsHistoryResponse
  | MarketRentalsResponse
  | AuctionHouseResponse
  | AuctionHouseListingResponse
  | PointsMarketResponse
  | MarketPropertiesResponse
  | MarketLookupResponse
  | TimestampResponse;
