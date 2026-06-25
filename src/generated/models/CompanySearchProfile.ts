import type {
  CompanyCustomers,
  CompanyEmployees,
  CompanyId,
  CompanyIncome,
  CompanyType,
} from ".";

/** @category Models */
export type CompanySearchProfile = {
  id: CompanyId;
  name: string;
  created_at: number;
  days_old: number;
  image: string | null;
  type: CompanyType;
  rating: number;
  employees: CompanyEmployees;
  income: CompanyIncome;
  customers: CompanyCustomers;
  applications_allowed: boolean;
};
