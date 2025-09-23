import type { ItemId, RaceCarId, RaceClassEnum, UserId } from ".";

/** @category Models */
export type RacerDetails = {
  driver_id: UserId;
  position: number | null;
  car_id: RaceCarId;
  car_item_id: ItemId;
  car_item_name: string;
  car_class: RaceClassEnum;
  has_crashed: boolean | null;
  best_lap_time: number | null;
  race_time: number | null;
  time_ended: number | null;
};
