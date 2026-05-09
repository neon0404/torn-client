import type { CompanyEmployeeExtended } from ".";

/** @category Models */
export type CompanyEmployeeFull = CompanyEmployeeExtended & {
  joined_at: number;
  wage: number;
  value: number | null;
};
