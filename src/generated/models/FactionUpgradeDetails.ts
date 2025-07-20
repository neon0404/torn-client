import type { FactionBranchId } from ".";

/** @category Models */
export type FactionUpgradeDetails = {
  id: FactionBranchId;
  name: string;
  ability: string;
  level: number;
  cost: number;
  unlocked_at?: number;
};
