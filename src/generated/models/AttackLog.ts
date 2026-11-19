import type {
  AttackActionEnum,
  AttackLogAttacker,
  AttackLogDefender,
  AttackLogItem,
} from ".";

/** @category Models */
export type AttackLog = {
  text: string;
  timestamp: number;
  action: AttackActionEnum;
  icon: string;
  attacker: AttackLogAttacker | null;
  defender: AttackLogDefender | null;
  attacker_item?: AttackLogItem | null;
};
