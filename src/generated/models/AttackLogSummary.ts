import type { UserId } from ".";

/** @category Models */
export type AttackLogSummary = {
  id: UserId | null;
  name: string | null;
  hits: number;
  misses: number;
  damage: number;
};
