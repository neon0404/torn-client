import type {
  UserPersonalStatsCategory,
  UserPersonalStatsFull,
  UserPersonalStatsFullPublic,
  UserPersonalStatsHistoric,
  UserPersonalStatsPopular,
} from ".";

/** @category Models */
export type UserPersonalStatsResponse =
  | UserPersonalStatsFull
  | UserPersonalStatsFullPublic
  | UserPersonalStatsPopular
  | UserPersonalStatsCategory
  | UserPersonalStatsHistoric;
