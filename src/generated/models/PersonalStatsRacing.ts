/** @category Models */
export type PersonalStatsRacing = {
  racing: {
    skill: number;
    points: number;
    races: {
      entered: number;
      won: number;
    };
  };
};
