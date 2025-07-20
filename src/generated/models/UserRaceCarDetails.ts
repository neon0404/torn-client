import type { RaceCar, RaceCarId, RaceCarUpgradeId } from ".";

/** @category Models */
export type UserRaceCarDetails = RaceCar & {
  id: RaceCarId;
  name: string | unknown;
  worth: number;
  points_spent: number;
  races_entered: number;
  races_won: number;
  is_removed: boolean;
  parts: RaceCarUpgradeId[];
};
