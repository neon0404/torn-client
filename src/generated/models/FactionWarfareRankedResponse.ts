import type { FactionRankedWarDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionWarfareRankedResponse = {
  warfareranked: FactionRankedWarDetails[];
  _metadata: RequestMetadataWithLinks;
};
