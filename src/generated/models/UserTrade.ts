import type { TradeId, UserTradeParticipant } from ".";

/** @category Models */
export type UserTrade = {
  id: TradeId;
  timestamp: number;
  user: UserTradeParticipant;
  trader: UserTradeParticipant;
};
