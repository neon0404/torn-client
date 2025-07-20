import type { ReportHistoryCompany, ReportHistoryFaction } from ".";

/** @category Models */
export type ReportHistory = {
  factions: ReportHistoryFaction[];
  companies: ReportHistoryCompany[];
};
