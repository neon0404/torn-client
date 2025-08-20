import type { CompanyTypeId } from ".";

/** @category Models */
export type UserCompanyPoints = {
  company: {
    id: CompanyTypeId;
    name: string;
  };
  points: number;
};
