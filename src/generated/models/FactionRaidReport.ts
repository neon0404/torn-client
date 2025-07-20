import type { FactionRaidReportFaction, RaidWarId } from ".";

/** @category Models */
export type FactionRaidReport = {
  id: RaidWarId;
  start: number;
  end: number;
  aggressor: FactionRaidReportFaction;
  defender: FactionRaidReportFaction;
};
