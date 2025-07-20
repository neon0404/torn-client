/** @category Models */
export type UserCrimeDetailsScamming = {
  most_responses: number;
  zones: {
    red: number;
    neutral: number;
    concern: number;
    sensitivity: number;
    temptation: number;
    hesitation: number;
    low_reward: number;
    medium_reward: number;
    high_reward: number;
  };
  concerns: {
    attempts: number;
    resolved: number;
  };
  payouts: {
    low: number;
    medium: number;
    high: number;
  };
  emails: {
    scraper: number;
    phisher: number;
  };
};
