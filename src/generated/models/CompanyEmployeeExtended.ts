import type {
  CompanyEmployee,
  CompanyEmployeeEffectiveness,
  CompanyEmployeeStats,
} from ".";

/** @category Models */
export type CompanyEmployeeExtended = CompanyEmployee & {
  stats: CompanyEmployeeStats;
  effectiveness: CompanyEmployeeEffectiveness;
};
