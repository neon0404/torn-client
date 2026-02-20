import type { Bounty } from ".";

/** @category Models */
export type UserBountiesResponse = {
  bounties: Bounty[];
  bounties_timestamp: number;
};
