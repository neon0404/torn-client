import type { FactionId, UserId } from ".";

/** @category Models */
export type FactionTerritoryWarParticipant = {
  id: FactionId;
  name: string;
  score: number;
  chain: number;
  is_aggressor: boolean;
  playerIds: UserId[];
};
