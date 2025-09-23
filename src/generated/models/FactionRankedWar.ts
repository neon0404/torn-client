import type { FactionRankedWarParticipant } from ".";

/** @category Models */
export type FactionRankedWar = {
  war_id: number;
  start: number;
  end: number | null;
  target: number;
  winner: number | null;
  factions: FactionRankedWarParticipant[];
};
