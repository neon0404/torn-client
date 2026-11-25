import type { FactionRankedWarParticipant, FactionRankedWarTemplate } from ".";

/** @category Models */
export type FactionRankedWar = {
  war_id: number;
  template: FactionRankedWarTemplate;
  start: number;
  end: number | null;
  target: number;
  winner: number | null;
  factions: FactionRankedWarParticipant[];
};
