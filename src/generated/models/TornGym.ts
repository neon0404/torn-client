import type { GymClassEnum, GymId, TornGymModifiers } from ".";

/** @category Models */
export type TornGym = {
  id: GymId;
  name: string;
  class: GymClassEnum;
  energy_cost: number;
  cost: number;
  modifiers: TornGymModifiers;
  note: string | null;
};
