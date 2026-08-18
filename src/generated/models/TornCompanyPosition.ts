import type { CompanyPositionId } from ".";

/** @category Models */
export type TornCompanyPosition = {
  id: CompanyPositionId;
  name: string;
  description: string;
  ability: string;
  working_stats: {
    required: {
      intelligence: number;
      manual_labor: number;
      endurance: number;
    };
    daily_gains: {
      intelligence: number;
      manual_labor: number;
      endurance: number;
    };
  };
};
