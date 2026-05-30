import type {
  CompanyEmployee,
  CompanyEmployeeExtended,
  CompanyEmployeeFull,
} from ".";

/** @category Models */
export type CompanyEmployeesResponse = {
  employees: CompanyEmployee | CompanyEmployeeExtended | CompanyEmployeeFull[];
};
