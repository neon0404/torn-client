import type { FactionId, UserId } from ".";

/** @category Models */
export type TradeItemFaction = {
  user_id: UserId;
  type: "Faction";
  details: {
    id: FactionId;
    name: string;
    respect: number;
  };
};
