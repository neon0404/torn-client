import type {
  ReportAnonymousBounties,
  ReportCompanyFinancials,
  ReportFriendOrFoe,
  ReportHistory,
  ReportInvestment,
  ReportMoney,
  ReportMostWanted,
  ReportStats,
  ReportStockAnalysis,
  ReportTrueLevel,
} from ".";

/** @category Models */
export type ReportReport = {
  report:
    | ReportMoney
    | ReportStats
    | ReportMostWanted
    | ReportHistory
    | ReportFriendOrFoe
    | ReportCompanyFinancials
    | ReportTrueLevel
    | ReportStockAnalysis
    | ReportAnonymousBounties
    | ReportInvestment;
};
