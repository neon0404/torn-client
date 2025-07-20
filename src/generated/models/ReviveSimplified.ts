import type { FactionId, ReviveId, UserId } from ".";

/** @category Models */
export type ReviveSimplified = {
  id: ReviveId;
  reviver: {
    id: UserId;
    faction_id: FactionId | unknown;
  };
  target: {
    id: UserId;
    faction_id: FactionId | unknown;
    hospital_reason: string;
    early_discharge: boolean;
    last_action: number;
    online_status: string;
  };
  success_chance: number;
  result: string;
  timestamp: number;
};
