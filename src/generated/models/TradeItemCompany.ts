import type { CompanyId, UserId } from ".";

/** @category Models */
export type TradeItemCompany = {
  user_id: UserId;
  type: "Company";
  details: {
    id: CompanyId;
    name: string;
    value: number;
  };
};
