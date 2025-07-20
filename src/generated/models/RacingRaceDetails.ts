import type { Race, RacerDetails } from ".";

/** @category Models */
export type RacingRaceDetails = Race & {
  results: RacerDetails[];
  is_official: boolean;
};
