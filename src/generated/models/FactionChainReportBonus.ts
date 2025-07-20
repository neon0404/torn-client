import type { UserId } from ".";

/** @category Models */
export type FactionChainReportBonus = {
  attacker_id: UserId;
  defender_id: UserId;
  chain: number;
  respect: number;
};
