import type { RequestMetadataWithLinks, TornFactionHof } from ".";

/** @category Models */
export type TornFactionHofResponse = {
  factionhof: TornFactionHof[];
  _metadata: RequestMetadataWithLinks;
};
