import type { UserFactionBasic, UserId } from ".";

/** @category Models */
export type AttackPlayer = {
  id: UserId;
  name: string;
  level: number;
  faction: UserFactionBasic | null;
};
