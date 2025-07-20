import type { FactionId } from ".";

/** @category Models */
export type FactionTerritoryWarFinishedFaction = {
  id: FactionId;
  name: string;
  score: number;
  is_aggressor: boolean;
};
