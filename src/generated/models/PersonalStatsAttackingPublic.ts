/** @category Models */
export type PersonalStatsAttackingPublic = {
  attacking: {
    attacks: {
      won: number;
      lost: number;
      stalemate: number;
      assist: number;
      stealth: number;
    };
    defends: {
      won: number;
      lost: number;
      stalemate: number;
      total: number;
    };
    elo: number;
    unarmored_wins: number;
    highest_level_beaten: number;
    escapes?: {
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
      retaliations: number;
      ranked_war_hits: number;
      raid_hits: number;
      territory: {
        wall_joins: number;
        wall_clears: number;
        wall_time: number;
      };
    };
  };
};
