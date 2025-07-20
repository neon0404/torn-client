import type { FactionTerritoryEnum, TornTerritoryCoordinates } from ".";

/** @category Models */
export type TornTerritory = {
  id: FactionTerritoryEnum;
  sector: number;
  size: number;
  density: number;
  slots: number;
  respect: number;
  coordinates: TornTerritoryCoordinates;
  neighbors: FactionTerritoryEnum[];
};
