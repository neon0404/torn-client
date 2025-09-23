import type { FactionId, ReviveId, UserId } from ".";

/** @category Models */
export type Revive = {
  id: ReviveId;
  reviver: {
    id: UserId;
    name: string;
    faction: {
      id: FactionId;
      name: string;
    } | null;
    skill: number | null;
  };
  target: {
    id: UserId;
    name: string;
    faction: {
      id: FactionId;
      name: string;
    } | null;
    hospital_reason: string;
    early_discharge: boolean;
    last_action: number;
    online_status: string;
  };
  success_chance: number;
  result: string;
  timestamp: number;
};
