import type { UserId, UserLastAction, UserStatus } from ".";

/** @category Models */
export type TornEliminationTeamPlayer = {
  id: UserId;
  name: string;
  level: number;
  last_action: UserLastAction;
  status: UserStatus;
  attacks: number;
  score: number;
};
