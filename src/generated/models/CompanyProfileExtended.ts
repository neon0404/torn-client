import type { CompanyProfile, CompanyUpgrades } from ".";

/** @category Models */
export type CompanyProfileExtended = CompanyProfile & {
  funds: number;
  popularity: number;
  efficiency: number;
  environment: number;
  trains: number;
  applications_allowed: boolean;
  advertisement_budget: number;
  upgrades: CompanyUpgrades;
  value: number;
};
