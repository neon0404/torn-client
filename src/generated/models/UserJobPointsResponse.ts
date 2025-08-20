import type { UserCompanyPoints } from ".";

/** @category Models */
export type UserJobPointsResponse = {
  jobpoints: {
    jobs: {
      army: number;
      casino: number;
      education: number;
      grocer: number;
      law: number;
      medical: number;
    };
    companies: UserCompanyPoints[];
  };
};
