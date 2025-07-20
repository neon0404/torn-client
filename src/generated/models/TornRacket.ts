import type { TornRacketReward } from ".";

/** @category Models */
export type TornRacket = {
  name: string;
  level: number;
  description: string;
  reward: TornRacketReward;
  created_at: number;
  changed_at: number;
};
