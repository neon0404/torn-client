import type { FactionRaidWarfare, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionRaidsResponse = {
  raids: FactionRaidWarfare[];
  _metadata: RequestMetadataWithLinks;
};
