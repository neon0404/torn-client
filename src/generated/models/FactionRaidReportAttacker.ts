import type { FactionRaidReportUser } from ".";

/** @category Models */
export type FactionRaidReportAttacker = {
  user: FactionRaidReportUser;
  attacks: number;
  damage: number;
};
