import type { FactionSearch, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionSearchResponse = {
  search: FactionSearch[];
  _metadata: RequestMetadataWithLinks;
};
