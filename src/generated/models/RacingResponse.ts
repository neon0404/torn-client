import type {
  RacingCarUpgradesResponse,
  RacingCarsResponse,
  RacingLookupResponse,
  RacingRaceDetailsResponse,
  RacingRacesResponse,
  RacingTrackRecordsResponse,
  RacingTracksResponse,
  TimestampResponse,
} from ".";

/** @category Models */
export type RacingResponse =
  | RacingRacesResponse
  | RacingTrackRecordsResponse
  | RacingRaceDetailsResponse
  | RacingCarsResponse
  | RacingTracksResponse
  | RacingCarUpgradesResponse
  | RacingLookupResponse
  | TimestampResponse;
