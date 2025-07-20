/** @category Models */
export type PersonalStatsTrading = {
  trading: {
    items: {
      bought: {
        market: number;
        shops: number;
      };
      auctions: {
        won: number;
        sold: number;
      };
      sent: number;
    };
    trades: number;
    points: {
      bought: number;
      sold: number;
    };
    bazaar: {
      customers: number;
      sales: number;
      profit: number;
    };
    item_market?: {
      customers: number;
      sales: number;
      revenue: number;
      fees: number;
    };
  };
};
