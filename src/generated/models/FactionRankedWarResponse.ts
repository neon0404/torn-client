import type { FactionRankedWarDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionRankedWarResponse = {
  rankedwars: FactionRankedWarDetails[];
  _metadata: RequestMetadataWithLinks;
};
