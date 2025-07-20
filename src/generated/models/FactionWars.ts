import type { FactionRaidWar, FactionRankedWar, FactionTerritoryWar } from ".";

/** @category Models */
export type FactionWars = {
  ranked: FactionRankedWar | unknown;
  raids: FactionRaidWar[];
  territory: FactionTerritoryWar[];
};
