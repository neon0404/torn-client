/** @category Models */
export type PersonalStatsInvestments = {
  investments: {
    bank: {
      total: number;
      profit: number;
      current: number;
      time_remaining: number;
    };
    stocks: {
      profits: number;
      losses: number;
      fees: number;
      net_profits: number;
      payouts: number;
    };
  };
};
