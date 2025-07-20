/** @category Models */
export type PersonalStatsBounties = {
  bounties: {
    placed: {
      amount: number;
      value: number;
    };
    collected: {
      amount: number;
      value: number;
    };
    received: {
      amount: number;
      value: number;
    };
  };
};
