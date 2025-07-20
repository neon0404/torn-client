/** @category Models */
export type PersonalStatsJail = {
  jail: {
    times_jailed: number;
    busts: {
      success: number;
      fails: number;
    };
    bails: {
      amount: number;
      fees: number;
    };
  };
};
