/** @category Models */
export type PersonalStatsAttackingPopular = {
  attacking: {
    attacks: {
      won: number;
      lost: number;
      stalemate: number;
      assist: number;
    };
    defends: {
      won: number;
      lost: number;
      stalemate: number;
    };
    elo: number;
    escapes: {
      player: number;
      foes: number;
    };
    killstreak: {
      best: number;
    };
    hits: {
      success: number;
      miss: number;
      critical: number;
      one_hit_kills: number;
    };
    damage: {
      total: number;
      best: number;
    };
    networth: {
      money_mugged: number;
      largest_mug: number;
      items_looted: number;
    };
    ammunition: {
      total: number;
      special: number;
      hollow_point: number;
      tracer: number;
      piercing: number;
      incendiary: number;
    };
    faction: {
      respect: number;
      ranked_war_hits: number;
    };
  };
};
