import type { CountryEnum, UserFlyMethodEnum } from ".";

/** @category Models */
export type UserTravelResponse = {
  travel: {
    destination: CountryEnum;
    method: UserFlyMethodEnum | unknown;
    departed_at: number | unknown;
    arrival_at: number | unknown;
    time_left: number;
  };
};
