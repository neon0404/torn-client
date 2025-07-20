import type { AttackPlayerFaction, UserId } from ".";

/** @category Models */
export type AttackPlayer = {
  id: UserId;
  name: string;
  level: number;
  faction: AttackPlayerFaction | unknown;
};
