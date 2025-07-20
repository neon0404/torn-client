import type { FactionCrimeUserOutcome, UserId } from ".";

/** @category Models */
export type FactionCrimeUser = {
  id: UserId;
  outcome: FactionCrimeUserOutcome | unknown;
  joined_at: number;
  progress: number;
};
