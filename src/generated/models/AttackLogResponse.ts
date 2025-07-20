import type { AttackLog, AttackLogSummary, RequestMetadataWithLinks } from ".";

/** @category Models */
export type AttackLogResponse = {
  attacklog: {
    log: AttackLog[];
    summary: AttackLogSummary[];
  };
  _metadata: RequestMetadataWithLinks;
};
