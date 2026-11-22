import type { AttackLogItem, UserId } from ".";

/** @category Models */
export type AttackLogAttacker = {
  id: UserId;
  name: string;
  item: AttackLogItem | null;
};
