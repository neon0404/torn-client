/** @category Models */
export type ReportCompanyFinancials = {
  balance: number;
  employees: number;
  wages: {
    highest: number;
    lowest: number;
    average: number;
  };
};
