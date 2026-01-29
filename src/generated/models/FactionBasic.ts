import type { FactionId, FactionRank, UserId } from ".";

/** @category Models */
export type FactionBasic = {
  id: FactionId;
  name: string;
  tag: string;
  tag_image: string;
  leader_id: UserId;
  co_leader_id: UserId;
  respect: number;
  days_old: number;
  capacity: number;
  members: number;
  is_enlisted: boolean | null;
  rank: FactionRank;
  best_chain: number;
  note?: string;
};
