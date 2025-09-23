import type {
  FactionCrimeUserItemOutcome,
  FactionCrimeUserOutcome,
  UserId,
} from ".";

/** @category Models */
export type FactionCrimeUser = {
  id: UserId;
  outcome: FactionCrimeUserOutcome | null;
  outcome_duration?: number | null;
  item_outcome: FactionCrimeUserItemOutcome | null;
  joined_at: number;
  progress: number;
};
