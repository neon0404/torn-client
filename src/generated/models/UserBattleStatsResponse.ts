import type { UserBattleStatDetail } from ".";

/** @category Models */
export type UserBattleStatsResponse = {
  battlestats: {
    strength: UserBattleStatDetail;
    defense: UserBattleStatDetail;
    speed: UserBattleStatDetail;
    dexterity: UserBattleStatDetail;
    total: number;
  };
};
