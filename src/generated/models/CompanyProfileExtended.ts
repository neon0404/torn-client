import type { CompanyProfile, CompanyUpgrades } from ".";

/** @category Models */
export type CompanyProfileExtended = CompanyProfile & {
  funds: number;
  popularity: number;
  efficiency: number;
  environment: number;
  trains: number;
  advertisement_budget: number;
  upgrades: CompanyUpgrades;
  value: number;
};
