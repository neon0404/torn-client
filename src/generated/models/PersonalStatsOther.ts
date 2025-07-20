/** @category Models */
export type PersonalStatsOther = {
  other: {
    activity: {
      time: number;
      streak: {
        best: number;
        current: number;
      };
    };
    awards: number;
    merits_bought: number;
    refills: {
      energy: number;
      nerve: number;
      token: number;
    };
    donator_days: number;
    ranked_war_wins: number;
  };
};
