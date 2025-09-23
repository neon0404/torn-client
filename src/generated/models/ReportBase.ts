import type { FactionId, ReportTypeEnum, UserId } from ".";

/** @category Models */
export type ReportBase = {
  type: ReportTypeEnum;
  target_id: UserId | null;
  reporter_id: UserId;
  faction_id: FactionId | null;
  timestamp: number;
};
