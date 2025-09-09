import type { CompanyId, CompanyTypeId } from ".";

/** @category Models */
export type UserCompany = {
  type: "company";
  id: CompanyId;
  type_id: CompanyTypeId;
  name: string;
  position: string;
  days_in_company: number;
};
