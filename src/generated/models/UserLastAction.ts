import type { UserLastActionStatusEnum } from ".";

/**
 * Details about a user's last action.
 * @category Models
 */
export type UserLastAction = {
  status: UserLastActionStatusEnum;
  timestamp: number;
  relative: string;
};
