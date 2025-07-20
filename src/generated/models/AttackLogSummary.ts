import type { UserId } from ".";

/** @category Models */
export type AttackLogSummary = {
  id: UserId | unknown;
  name: string | unknown;
  hits: number;
  misses: number;
  damage: number;
};
