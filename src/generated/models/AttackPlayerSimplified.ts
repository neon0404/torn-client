import type { FactionId, UserId } from ".";

/** @category Models */
export type AttackPlayerSimplified = {
  id: UserId;
  faction_id: FactionId | unknown;
};
