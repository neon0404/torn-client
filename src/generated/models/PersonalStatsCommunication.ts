/** @category Models */
export type PersonalStatsCommunication = {
  communication: {
    mails_sent: {
      total: number;
      friends: number;
      faction: number;
      colleagues: number;
      spouse: number;
    };
    classified_ads: number;
    personals: number;
  };
};
