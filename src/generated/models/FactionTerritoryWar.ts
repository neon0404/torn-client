import type { FactionId, FactionTerritoryWarParticipant } from ".";

/** @category Models */
export type FactionTerritoryWar = {
  war_id: number;
  territory: string;
  start: number;
  end: number | null;
  target: number;
  winner?: FactionId | null;
  factions: FactionTerritoryWarParticipant[];
};
