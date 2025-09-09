import type { UserId, UserMaritalStatusEnum } from ".";

/** @category Models */
export type ProfileSpouse = {
  id: UserId;
  name: string;
  status: UserMaritalStatusEnum;
  days_married: number;
};
