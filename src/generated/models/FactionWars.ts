import type { FactionRaidWar, FactionRankedWar, FactionTerritoryWar } from ".";

/** @category Models */
export type FactionWars = {
  ranked: FactionRankedWar | null;
  raids: FactionRaidWar[];
  territory: FactionTerritoryWar[];
};
