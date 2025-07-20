import type { CompanyId } from ".";

/** @category Models */
export type ReportHistoryCompany = {
  id: CompanyId;
  name: string;
  joined: string;
  left: string | unknown;
};
