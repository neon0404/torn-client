import type {
  UserCrimeAttempts,
  UserCrimeDetailsBootlegging,
  UserCrimeDetailsCardSkimming,
  UserCrimeDetailsCracking,
  UserCrimeDetailsGraffiti,
  UserCrimeDetailsHustling,
  UserCrimeDetailsScamming,
  UserCrimeDetailsShoplifting,
  UserCrimeRewards,
  UserCrimeUniques,
} from ".";

/** @category Models */
export type UserCrime = {
  nerve_spent: number;
  skill: number;
  progression_bonus: number;
  rewards: UserCrimeRewards;
  attempts: UserCrimeAttempts;
  uniques: UserCrimeUniques[];
  miscellaneous:
    | UserCrimeDetailsBootlegging
    | UserCrimeDetailsGraffiti
    | UserCrimeDetailsShoplifting
    | UserCrimeDetailsCardSkimming
    | UserCrimeDetailsHustling
    | UserCrimeDetailsCracking
    | UserCrimeDetailsScamming
    | unknown;
};
