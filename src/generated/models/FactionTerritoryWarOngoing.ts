import type {
  FactionTerritoryEnum,
  FactionTerritoryWarOngoingFaction,
  TerritoryWarId,
} from ".";

/** @category Models */
export type FactionTerritoryWarOngoing = {
  id: TerritoryWarId;
  territory: FactionTerritoryEnum;
  start: number;
  end: number;
  target: number;
  factions: FactionTerritoryWarOngoingFaction[];
};
