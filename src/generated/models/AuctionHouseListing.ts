import type {
  AuctionHouseStackableItem,
  AuctionListingId,
  BasicUser,
  TornItemDetails,
} from ".";

/** @category Models */
export type AuctionHouseListing = {
  id: AuctionListingId;
  seller: BasicUser;
  buyer: BasicUser;
  timestamp: number;
  price: number;
  bids: number;
  item: AuctionHouseStackableItem | TornItemDetails;
};
