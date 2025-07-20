/** @category Models */
export type PersonalStatsDrugs = {
  drugs: {
    cannabis: number;
    ecstasy: number;
    ketamine: number;
    lsd: number;
    opium: number;
    pcp: number;
    shrooms: number;
    speed: number;
    vicodin: number;
    xanax: number;
    total: number;
    overdoses: number;
    rehabilitations: {
      amount: number;
      fees: number;
    };
  };
};
