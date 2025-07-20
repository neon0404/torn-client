import type {
  EducationId,
  TornEducationPrerequisites,
  TornEducationRewards,
} from ".";

/** @category Models */
export type TornEducationCourses = {
  id: EducationId;
  code: string;
  name: string;
  description: string;
  duration: number;
  rewards: TornEducationRewards;
  prerequisites: TornEducationPrerequisites;
};
