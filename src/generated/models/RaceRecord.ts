import type { ItemId, UserId } from ".";

/** @category Models */
export type RaceRecord = {
  driver_id: UserId;
  driver_name: string;
  car_item_id: ItemId;
  lap_time: number;
  car_item_name: string;
};
