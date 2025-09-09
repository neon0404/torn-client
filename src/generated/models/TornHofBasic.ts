import type { FactionId, UserId, UserRankEnum } from ".";

/** @category Models */
export type TornHofBasic = {
  id: UserId;
  username: string;
  faction_id: FactionId;
  level: number;
  last_action: number;
  rank_name: UserRankEnum;
  rank_number: number;
  position: number;
  signed_up: number;
  age_in_days: number;
  value: number | string;
  rank: string;
};
