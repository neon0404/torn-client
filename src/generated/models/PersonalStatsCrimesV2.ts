/** @category Models */
export type PersonalStatsCrimesV2 = {
  offenses: {
    vandalism: number;
    fraud: number;
    theft: number;
    counterfeiting: number;
    illicit_services: number;
    cybercrime: number;
    extortion: number;
    illegal_production: number;
    organized_crimes: number;
    total: number;
  };
  skills: {
    search_for_cash: number;
    bootlegging: number;
    graffiti: number;
    shoplifting: number;
    pickpocketing: number;
    card_skimming: number;
    burglary: number;
    hustling: number;
    disposal: number;
    cracking: number;
    forgery: number;
    scamming: number;
  };
  version: string;
};
