import type { UserId } from ".";

/** @category Models */
export type FactionTerritoryWarReportMembers = {
  id: UserId;
  username: string;
  level: number;
  score: number;
  joins: number;
  clears: number;
};
