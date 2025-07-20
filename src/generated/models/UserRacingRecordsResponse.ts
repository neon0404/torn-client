import type { ItemId, RaceTrackId } from ".";

/** @category Models */
export type UserRacingRecordsResponse = {
  racingrecords: {
    track: {
      id: RaceTrackId;
      name: string;
    };
    records: {
      car_id: ItemId;
      car_name: string;
      lap_time: number;
    }[];
  }[];
};
