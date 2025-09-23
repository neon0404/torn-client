import type { HofValue, HofValueFloat } from ".";

/** @category Models */
export type UserHofStats = {
  attacks: HofValue;
  busts: HofValue;
  defends: HofValue;
  networth: HofValue;
  offences: HofValue;
  revives: HofValue;
  level: HofValue;
  rank: HofValue;
  awards: HofValue;
  racing_skill: HofValueFloat;
  racing_points: HofValue;
  racing_wins: HofValue;
  travel_time: HofValue;
  working_stats: HofValue;
  battle_stats: HofValue | null;
};
