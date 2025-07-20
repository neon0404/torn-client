import type { FactionBranchStateEnum, FactionUpgrades } from ".";

/** @category Models */
export type FactionUpgradesResponse = {
  upgrades: FactionUpgrades;
  state: FactionBranchStateEnum;
};
