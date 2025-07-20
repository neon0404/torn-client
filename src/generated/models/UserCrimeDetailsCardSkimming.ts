/** @category Models */
export type UserCrimeDetailsCardSkimming = {
  card_details: {
    recoverable: number;
    recovered: number;
    sold: number;
    lost: number;
    areas: {
      id: number;
      amount: number;
    }[];
  };
  skimmers: {
    active: number;
    most_lucrative: number;
    oldest_recovered: number;
    lost: number;
  };
};
