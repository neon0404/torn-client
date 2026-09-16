import type { CompanySpecialId } from ".";

/** @category Models */
export type TornCompanySpecial = {
  id: CompanySpecialId;
  name: string;
  effect: string;
  cost: number;
  rating: number;
};
