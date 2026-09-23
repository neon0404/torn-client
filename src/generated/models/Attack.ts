import type {
  AttackCode,
  AttackId,
  AttackPlayer,
  AttackingFinishingHitEffects,
  FactionAttackResult,
  TerritoryWarId,
} from ".";

/** @category Models */
export type Attack = {
  id: AttackId;
  code: AttackCode;
  started: number;
  ended: number;
  attacker: AttackPlayer | null;
  defender: AttackPlayer;
  result: FactionAttackResult;
  respect_gain: number;
  respect_loss: number;
  chain: number | null;
  is_interrupted: boolean;
  is_stealthed: boolean;
  is_raid: boolean;
  is_ranked_war: boolean;
  is_territory_war: boolean;
  territory_war_id: TerritoryWarId | null;
  finishing_hit_effects: AttackingFinishingHitEffects[];
  modifiers: {
    fair_fight: number;
    war: number;
    retaliation: number;
    group: number;
    overseas: number;
    chain: number;
    warlord: number;
  };
};
