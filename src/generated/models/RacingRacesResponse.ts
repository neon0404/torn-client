import type { Race, RequestMetadataWithLinks } from ".";

/** @category Models */
export type RacingRacesResponse = {
  races: Race[];
  _metadata: RequestMetadataWithLinks;
};
