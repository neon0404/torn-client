import type {
  AuctionHouseStackableItem,
  AuctionListingId,
  BasicUser,
  TornItemDetails,
} from ".";

/** @category Models */
export type UserAuctionHouseListing = {
  id: AuctionListingId;
  buyer: BasicUser;
  timestamp: number;
  price: number;
  bids: number;
  item: AuctionHouseStackableItem | TornItemDetails;
};
