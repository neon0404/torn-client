import type {
  FactionCrimeId,
  FactionCrimeReward,
  FactionCrimeSlot,
  FactionCrimeStatusEnum,
  OrganizedCrimeName,
} from ".";

/** @category Models */
export type FactionCrime = {
  id: FactionCrimeId;
  previous_crime_id: FactionCrimeId | unknown;
  name: OrganizedCrimeName;
  difficulty: number;
  status: FactionCrimeStatusEnum;
  created_at: number;
  planning_at: number | unknown;
  ready_at: number | unknown;
  expired_at: number;
  executed_at: number | unknown;
  slots: FactionCrimeSlot[];
  rewards: FactionCrimeReward | unknown;
};
