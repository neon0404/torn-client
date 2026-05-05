import type {
  CompanyEmployeePosition,
  UserId,
  UserLastAction,
  UserStatus,
} from ".";

/** @category Models */
export type CompanyEmployee = {
  id: UserId;
  name: string;
  position: CompanyEmployeePosition;
  days_in_company: number;
  status: UserStatus;
  last_action: UserLastAction;
};
