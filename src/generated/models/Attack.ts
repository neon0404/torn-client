import type {
  AttackCode,
  AttackId,
  AttackPlayer,
  AttackingFinishingHitEffects,
  FactionAttackResult,
} from ".";

/** @category Models */
export type Attack = {
  id: AttackId;
  code: AttackCode;
  started: number;
  ended: number;
  attacker: AttackPlayer | unknown;
  defender: AttackPlayer;
  result: FactionAttackResult;
  respect_gain: number;
  respect_loss: number;
  chain: number;
  is_interrupted: boolean;
  is_stealthed: boolean;
  is_raid: boolean;
  is_ranked_war: boolean;
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
