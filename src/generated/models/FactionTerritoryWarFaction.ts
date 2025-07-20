import type { FactionId, FactionTerritoryWarFactionWallPlayers } from ".";

/**
 * The fields 'chain' and 'players_on_wall' exist only for wars with the result 'in_progress'.
 * @category Models
 */
export type FactionTerritoryWarFaction = {
  id: FactionId;
  name: string;
  score: number;
  chain?: number;
  players_on_wall?: FactionTerritoryWarFactionWallPlayers[];
};
