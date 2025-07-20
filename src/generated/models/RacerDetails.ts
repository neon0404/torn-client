import type { ItemId, RaceCarId, RaceClassEnum, UserId } from ".";

/** @category Models */
export type RacerDetails = {
  driver_id: UserId;
  position: number | unknown;
  car_id: RaceCarId;
  car_item_id: ItemId;
  car_item_name: string;
  car_class: RaceClassEnum;
  has_crashed: boolean | unknown;
  best_lap_time: number | unknown;
  race_time: number | unknown;
  time_ended: number | unknown;
};
