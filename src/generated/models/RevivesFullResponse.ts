import type { RequestMetadataWithLinks, ReviveSimplified } from ".";

/** @category Models */
export type RevivesFullResponse = {
  revives: ReviveSimplified[];
  _metadata: RequestMetadataWithLinks;
};
