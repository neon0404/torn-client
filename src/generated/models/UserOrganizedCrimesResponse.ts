import type { FactionCrime, RequestMetadataWithLinks } from ".";

/** @category Models */
export type UserOrganizedCrimesResponse = {
  organizedcrimes: FactionCrime[];
  _metadata: RequestMetadataWithLinks;
};
