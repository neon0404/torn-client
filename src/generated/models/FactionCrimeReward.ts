import type { FactionCrimeRewardItem, FactionCrimeRewardPayout } from ".";

/** @category Models */
export type FactionCrimeReward = {
  money: number;
  items: FactionCrimeRewardItem[];
  respect: number;
  scope: number;
  payout: FactionCrimeRewardPayout | null;
};
