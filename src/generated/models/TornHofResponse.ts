import type { RequestMetadataWithLinks, TornHof } from ".";

/** @category Models */
export type TornHofResponse = {
  hof: TornHof[];
  _metadata: RequestMetadataWithLinks;
};
