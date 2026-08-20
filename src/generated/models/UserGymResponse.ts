import type { GymId } from ".";

/** @category Models */
export type UserGymResponse = {
  gym: {
    id: GymId;
    name: string;
  };
};
