import type { RequestMetadataWithLinks, UserLog } from ".";

/** @category Models */
export type UserLogsResponse = {
  log: UserLog[];
  _metadata: RequestMetadataWithLinks;
};
