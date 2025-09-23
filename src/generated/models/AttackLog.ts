import type { AttackActionEnum, ItemId, UserId } from ".";

/** @category Models */
export type AttackLog = {
  text: string;
  timestamp: number;
  action: AttackActionEnum;
  icon: string;
  attacker: {
    id: UserId;
    name: string;
    item: {
      id?: ItemId;
      name?: string;
    } | null;
  } | null;
  defender: {
    id: UserId;
    name: string;
  } | null;
  attacker_item?: {
    id: ItemId;
    name: string;
  };
};
