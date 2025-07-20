import type { Report, RequestMetadataWithLinks } from ".";

/** @category Models */
export type ReportsResponse = {
  reports: Report[];
  _metadata: RequestMetadataWithLinks;
};
