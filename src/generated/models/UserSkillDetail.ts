import type { UserSkillSlugEnum } from ".";

/** @category Models */
export type UserSkillDetail = {
  slug: UserSkillSlugEnum | string;
  name: string;
  level: number;
};
