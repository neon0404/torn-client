import type { TornEducationCourses } from ".";

/** @category Models */
export type TornEducation = {
  id: number;
  name: string;
  courses: TornEducationCourses[];
};
