/** @category Models */
export type PersonalStatsOtherPopular = {
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
    };
    donator_days: number;
    ranked_war_wins: number;
  };
};
