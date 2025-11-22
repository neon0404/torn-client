/** @category Models */
export type UserMoneyResponse = {
  money: {
    points: number;
    wallet: number;
    company: number;
    vault: number;
    cayman_bank: number;
    city_bank: {
      amount: number;
      profit: number;
      duration: number;
      interest_rate: number;
      until: number;
      invested_at: number;
    };
    faction: {
      money: number;
      points: number;
    };
    daily_networth: number;
  };
};
