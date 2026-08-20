import type {
  CompanyTypeId,
  TornCompanyPosition,
  TornCompanySpecial,
  TornCompanyStock,
} from ".";

/** @category Models */
export type TornCompany = {
  id: CompanyTypeId;
  name: string;
  cost: number;
  employees: number;
  positions: TornCompanyPosition[];
  specials: TornCompanySpecial[];
  stock: TornCompanyStock[];
};
