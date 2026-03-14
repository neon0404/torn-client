import type {
  TradeItemCompany,
  TradeItemFaction,
  TradeItemItem,
  TradeItemMoney,
  TradeItemNap,
  TradeItemProperty,
} from ".";

/** @category Models */
export type TradeItem =
  | TradeItemMoney
  | TradeItemItem
  | TradeItemFaction
  | TradeItemCompany
  | TradeItemProperty
  | TradeItemNap;
