import type { CountryEnum, UserFlyMethodEnum } from ".";

/** @category Models */
export type UserTravelResponse = {
  travel: {
    destination: CountryEnum;
    method: UserFlyMethodEnum | null;
    departed_at: number | null;
    arrival_at: number | null;
    time_left: number;
  };
};
