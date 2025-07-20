import type {
  FactionId,
  FactionRaidReportAttacker,
  FactionRaidReportUser,
} from ".";

/** @category Models */
export type FactionRaidReportFaction = {
  id: FactionId;
  name: string;
  score: number;
  attackers: FactionRaidReportAttacker[];
  non_attackers: FactionRaidReportUser[];
};
