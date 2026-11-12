import type { GymId, UserUnlockedGym } from ".";

/** @category Models */
export type UserGymResponse = {
  gym: {
    id: GymId;
    name: string;
    unlocked_gyms: UserUnlockedGym[];
  };
};
