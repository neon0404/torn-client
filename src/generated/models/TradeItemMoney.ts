import type { UserId } from ".";

/** @category Models */
export type TradeItemMoney = {
  user_id: UserId;
  type: "Money";
  details: {
    amount: number;
  };
};
