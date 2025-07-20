import type {
  PersonalStatsAttackingPublic,
  PersonalStatsBounties,
  PersonalStatsCommunication,
  PersonalStatsCrimes,
  PersonalStatsDrugs,
  PersonalStatsFinishingHits,
  PersonalStatsHospital,
  PersonalStatsItems,
  PersonalStatsJail,
  PersonalStatsJobsPublic,
  PersonalStatsMissions,
  PersonalStatsNetworthPublic,
  PersonalStatsOther,
  PersonalStatsRacing,
  PersonalStatsTrading,
  PersonalStatsTravel,
} from ".";

/**
 * Schema name corresponds to the requested category
 * @category Models
 */
export type UserPersonalStatsCategory = {
  personalstats:
    | PersonalStatsAttackingPublic
    | PersonalStatsJobsPublic
    | PersonalStatsTrading
    | PersonalStatsJail
    | PersonalStatsHospital
    | PersonalStatsFinishingHits
    | PersonalStatsCommunication
    | PersonalStatsCrimes
    | PersonalStatsBounties
    | PersonalStatsItems
    | PersonalStatsTravel
    | PersonalStatsDrugs
    | PersonalStatsMissions
    | PersonalStatsRacing
    | PersonalStatsNetworthPublic
    | PersonalStatsOther;
};
