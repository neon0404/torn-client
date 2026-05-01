import type {
  CompanyCustomers,
  CompanyDirector,
  CompanyEmployees,
  CompanyId,
  CompanyIncome,
  CompanyType,
} from ".";

/** @category Models */
export type CompanyProfile = {
  id: CompanyId;
  name: string;
  created_at: number;
  days_old: number;
  image: string;
  type: CompanyType;
  rating: number;
  director: CompanyDirector;
  employees: CompanyEmployees;
  income: CompanyIncome;
  customers: CompanyCustomers;
};
