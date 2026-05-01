import type {
  CompanyEmployee,
  CompanyEmployeeEffectiveness,
  CompanyEmployeeStats,
} from ".";

/** @category Models */
export type CompanyEmployeeExtended = CompanyEmployee & {
  joined_at: number;
  wage: number;
  stats: CompanyEmployeeStats;
  effectiveness: CompanyEmployeeEffectiveness;
  value: number | null;
};
