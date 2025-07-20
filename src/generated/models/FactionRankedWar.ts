import type { FactionRankedWarParticipant } from ".";

/** @category Models */
export type FactionRankedWar = {
  war_id: number;
  start: number;
  end: number | unknown;
  target: number;
  winner: number | unknown;
  factions: FactionRankedWarParticipant[];
};
