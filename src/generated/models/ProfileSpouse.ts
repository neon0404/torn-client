import type { UserId, UserMaritalStatusEnum } from ".";

/**
 * The property 'days_married' is not present if the status is 'Engaged'
 * @category Models
 */
export type ProfileSpouse = {
  id: UserId;
  name: string;
  status: UserMaritalStatusEnum;
  days_married?: number;
};
