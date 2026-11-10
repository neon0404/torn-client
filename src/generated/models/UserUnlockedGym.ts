import type { GymId } from ".";

/** @category Models */
export type UserUnlockedGym = {
  id: GymId;
  name: string;
  available: boolean;
};
