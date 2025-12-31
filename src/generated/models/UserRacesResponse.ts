import type { RequestMetadataWithLinks, UserRaceDetails } from ".";

/** @category Models */
export type UserRacesResponse = {
  races: UserRaceDetails[];
  _metadata: RequestMetadataWithLinks;
};
