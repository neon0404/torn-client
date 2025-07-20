import type { FactionUpgradeDetails } from ".";

/** @category Models */
export type FactionBranchDetails = {
  name: string;
  order: number;
  multiplier: number;
  upgrades: FactionUpgradeDetails[];
};
