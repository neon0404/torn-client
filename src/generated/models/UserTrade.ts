import type { TradeId, UserTradeParticipant } from ".";

/** @category Models */
export type UserTrade = {
  id: TradeId;
  timestamp?: number;
  completed_at: number | null;
  expires_at: number | null;
  modified_at: number | null;
  user: UserTradeParticipant;
  trader: UserTradeParticipant;
};
