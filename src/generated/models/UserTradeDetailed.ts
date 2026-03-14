import type { TradeItem, UserTrade } from ".";

/** @category Models */
export type UserTradeDetailed = UserTrade & {
  items: TradeItem[];
};
