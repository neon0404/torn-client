import type { EducationId, UserCurrentEducation } from ".";

/** @category Models */
export type UserEducation = {
  complete: EducationId[];
  current: UserCurrentEducation | unknown;
};
