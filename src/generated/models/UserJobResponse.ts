import type { UserCompany, UserJob } from ".";

/** @category Models */
export type UserJobResponse = {
  job: UserJob | UserCompany | null;
};
