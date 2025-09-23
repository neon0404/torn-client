import type {
  FactionTerritoryEnum,
  TornRacket,
  TornTerritoryCoordinates,
} from ".";

/** @category Models */
export type FactionTerritory = {
  id: FactionTerritoryEnum;
  acquired_at: number;
  sector: number;
  size: number;
  density: number;
  slots: number;
  respect: number;
  coordinates: TornTerritoryCoordinates;
  racket: TornRacket | null;
};
