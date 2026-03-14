import type { UserFactionBasic, UserId } from ".";

/** @category Models */
export type TradeItemNap = {
  user_id: UserId;
  type: "NAP";
  details: {
    days: number;
    factions: UserFactionBasic[];
  };
};
