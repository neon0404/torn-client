import type { FactionBranchDetails, FactionUpgradeDetails } from ".";

/** @category Models */
export type FactionUpgrades = {
  core: {
    upgrades?: FactionUpgradeDetails[];
  };
  peace: FactionBranchDetails[];
  war: FactionBranchDetails[];
};
