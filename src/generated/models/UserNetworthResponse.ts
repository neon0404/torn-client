/** @category Models */
export type UserNetworthResponse = {
  networth: {
    money: {
      pending: number;
      wallet: number;
      vault: number;
      bookie: number;
      city_bank: number;
      cayman_bank: number;
      piggy_bank: number;
      loans: number;
      unpaid_fees: number;
    };
    items: {
      inventory: number;
      display_case: number;
      bazaar: number;
      trades: number;
      item_market: number;
      auction_house: number;
      enlisted_cars: number;
    };
    assets: {
      property: number;
      stock_market: number;
      company: number;
    };
    points: number;
    total: number;
    timestamp: number;
  };
};
