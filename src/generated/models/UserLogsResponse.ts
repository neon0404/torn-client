import type { RequestMetadataWithLinksAndNanostamp, UserLog } from ".";

/** @category Models */
export type UserLogsResponse = {
  log: UserLog[];
  _metadata: RequestMetadataWithLinksAndNanostamp;
};
