import type { FactionId, UserId } from ".";

/** @category Models */
export type FactionTerritoryWarOngoingFaction = {
  id: FactionId;
  name: string;
  score: number;
  is_aggressor: boolean;
  chain: number;
  playerIds: UserId[];
};
