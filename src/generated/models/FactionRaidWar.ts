import type { FactionRaidWarParticipant } from ".";

/** @category Models */
export type FactionRaidWar = {
  war_id: number;
  start: number;
  end: number | unknown;
  factions: FactionRaidWarParticipant[];
};
