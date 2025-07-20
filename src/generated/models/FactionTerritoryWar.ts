import type { FactionId, FactionTerritoryWarParticipant } from ".";

/** @category Models */
export type FactionTerritoryWar = {
  war_id: number;
  territory: string;
  start: number;
  end: number | unknown;
  target: number;
  winner?: FactionId | unknown;
  factions: FactionTerritoryWarParticipant[];
};
