import type { FactionOrganizedCrimePayoutType, UserId } from ".";

/** @category Models */
export type FactionCrimeRewardPayout = {
  type: FactionOrganizedCrimePayoutType;
  percentage: number;
  paid_by: UserId;
  paid_at: number;
};
