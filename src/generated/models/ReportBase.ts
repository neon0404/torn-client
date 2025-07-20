import type { FactionId, ReportTypeEnum, UserId } from ".";

/** @category Models */
export type ReportBase = {
  type: ReportTypeEnum;
  target_id: UserId | unknown;
  reporter_id: UserId;
  faction_id: FactionId | unknown;
  timestamp: number;
};
