import type {
  AttackCode,
  AttackId,
  AttackPlayerSimplified,
  FactionAttackResult,
} from ".";

/** @category Models */
export type AttackSimplified = {
  id: AttackId;
  code: AttackCode;
  started: number;
  ended: number;
  attacker: AttackPlayerSimplified | unknown;
  defender: AttackPlayerSimplified;
  result: FactionAttackResult;
  respect_gain: number;
  respect_loss: number;
};
