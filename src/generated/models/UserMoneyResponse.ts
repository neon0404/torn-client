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
      until: number;
    };
    faction: {
      money: number;
      points: number;
    };
    daily_networth: number;
  };
};
