import type { TornCalendarActivity } from ".";

/** @category Models */
export type TornCalendarResponse = {
  calendar: {
    competitions: TornCalendarActivity[];
    events: TornCalendarActivity[];
  };
};
