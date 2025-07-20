/** @category Models */
export type PersonalStatsItems = {
  items: {
    found: {
      city: number;
      dump: number;
      easter_eggs: number;
    };
    trashed: number;
    used: {
      books: number;
      boosters: number;
      consumables: number;
      candy: number;
      alcohol: number;
      energy_drinks: number;
      stat_enhancers: number;
      easter_eggs: number;
    };
    viruses_coded: number;
  };
};
