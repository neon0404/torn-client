import type { FactionId } from ".";

/** @category Models */
export type ReportHistoryFaction = {
  id: FactionId;
  name: string;
  joined: string;
  left: string | unknown;
};
