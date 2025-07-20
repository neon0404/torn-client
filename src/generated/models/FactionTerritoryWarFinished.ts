import type {
  FactionTerritoryEnum,
  FactionTerritoryWarFinishedFaction,
  FactionTerritoryWarResultEnum,
  TerritoryWarId,
} from ".";

/** @category Models */
export type FactionTerritoryWarFinished = {
  id: TerritoryWarId;
  territory: FactionTerritoryEnum;
  start: number;
  end: number;
  target: number;
  result: FactionTerritoryWarResultEnum;
  factions: FactionTerritoryWarFinishedFaction[];
};
