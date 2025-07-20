import type { FactionCrime, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionCrimesResponse = {
  crimes: FactionCrime[];
  _metadata: RequestMetadataWithLinks;
};
