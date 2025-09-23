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
  previous_crime_id: FactionCrimeId | null;
  name: OrganizedCrimeName;
  difficulty: number;
  status: FactionCrimeStatusEnum;
  created_at: number;
  planning_at: number | null;
  ready_at: number | null;
  expired_at: number;
  executed_at: number | null;
  slots: FactionCrimeSlot[];
  rewards: FactionCrimeReward | null;
};
