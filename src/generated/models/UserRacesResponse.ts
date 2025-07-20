import type { RacingRaceDetails, RequestMetadataWithLinks } from ".";

/** @category Models */
export type UserRacesResponse = {
  races: RacingRaceDetails[];
  _metadata: RequestMetadataWithLinks;
};
