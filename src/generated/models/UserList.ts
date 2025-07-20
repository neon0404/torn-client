import type { FactionId, UserId, UserLastAction, UserStatus } from ".";

/** @category Models */
export type UserList = {
  id: UserId;
  name: string;
  level: number;
  faction_id: FactionId | unknown;
  last_action: UserLastAction;
  status: UserStatus;
};
