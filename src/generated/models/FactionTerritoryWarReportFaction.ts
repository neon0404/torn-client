import type { FactionId, FactionTerritoryWarReportMembers } from ".";

/** @category Models */
export type FactionTerritoryWarReportFaction = {
  id: FactionId;
  name: string;
  score: number;
  joins: number;
  clears: number;
  is_aggressor: boolean;
  members: FactionTerritoryWarReportMembers[];
};
