/** @category Models */
export type TornCalendarActivity = {
  title: string;
  description: string;
  start: number;
  end: number;
  earliest_start: number;
  latest_end: number;
  fixed_start_time: boolean;
};
