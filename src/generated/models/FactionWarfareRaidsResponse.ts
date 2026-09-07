import type { FactionRaidWarfare, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionWarfareRaidsResponse = {
  warfareraids: FactionRaidWarfare[];
  _metadata: RequestMetadataWithLinks;
};
