import type {
  FactionCrimeUserItemOutcome,
  FactionCrimeUserOutcome,
  UserId,
} from ".";

/** @category Models */
export type FactionCrimeUser = {
  id: UserId;
  outcome: FactionCrimeUserOutcome | unknown;
  outcome_duration?: number | unknown;
  item_outcome: FactionCrimeUserItemOutcome | unknown;
  joined_at: number;
  progress: number;
};
