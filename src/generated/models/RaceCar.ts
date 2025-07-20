import type { ItemId, RaceClassEnum } from ".";

/** @category Models */
export type RaceCar = {
  car_item_id: ItemId;
  car_item_name: string;
  top_speed: number;
  acceleration: number;
  braking: number;
  dirt: number;
  handling: number;
  safety: number;
  tarmac: number;
  class: RaceClassEnum;
};
