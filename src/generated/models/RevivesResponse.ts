import type { RequestMetadataWithLinks, Revive } from ".";

/** @category Models */
export type RevivesResponse = {
  revives: Revive[];
  _metadata: RequestMetadataWithLinks;
};
