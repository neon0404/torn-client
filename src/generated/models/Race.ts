import type {
  ItemId,
  RaceClassEnum,
  RaceId,
  RaceStatusEnum,
  RaceTrackId,
  UserId,
} from ".";

/** @category Models */
export type Race = {
  id: RaceId;
  title: string;
  track_id: RaceTrackId;
  creator_id: UserId;
  status: RaceStatusEnum;
  laps: number;
  participants: {
    minimum: number;
    maximum: number;
    current: number;
  };
  schedule: {
    join_from: number;
    join_until: number;
    start: number;
    end: number | unknown;
  };
  requirements: {
    car_class: RaceClassEnum | unknown;
    driver_class: RaceClassEnum | unknown;
    car_item_id: ItemId | unknown;
    requires_stock_car: boolean;
    requires_password: boolean;
    join_fee: number;
  };
  is_official: boolean;
};
