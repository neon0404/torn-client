import type { UserBattleStatModifierDetail } from ".";

/** @category Models */
export type UserBattleStatDetail = {
  value: number;
  modifier: number;
  modifiers: UserBattleStatModifierDetail[];
};
