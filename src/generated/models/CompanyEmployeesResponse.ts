import type { CompanyEmployee, CompanyEmployeeExtended } from ".";

/** @category Models */
export type CompanyEmployeesResponse = {
  employees: CompanyEmployee | CompanyEmployeeExtended[];
};
