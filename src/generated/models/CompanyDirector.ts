import type { UserId, UserLastAction, UserStatus } from ".";

/** @category Models */
export type CompanyDirector = {
  id: UserId;
  name: string;
  status: UserStatus;
  last_action: UserLastAction;
};
