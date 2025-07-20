import type {
  FactionId,
  FactionTerritoryEnum,
  FactionTerritoryWarReportFaction,
  TerritoryWarId,
} from ".";

/** @category Models */
export type FactionTerritoryWarReport = {
  id: TerritoryWarId;
  territory: FactionTerritoryEnum;
  started_at: number;
  ended_at: number;
  winner: FactionId;
  result: string;
  factions: FactionTerritoryWarReportFaction[];
};
