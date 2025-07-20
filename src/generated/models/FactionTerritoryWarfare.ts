import type {
  FactionTerritoryEnum,
  FactionTerritoryWarFaction,
  TerritoryWarId,
} from ".";

/** @category Models */
export type FactionTerritoryWarfare = {
  id: TerritoryWarId;
  territory: FactionTerritoryEnum;
  start: number;
  end: number;
  target: number;
  aggressor: FactionTerritoryWarFaction;
  defender: FactionTerritoryWarFaction;
  result: string;
};
