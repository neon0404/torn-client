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

/** @category Models */
export type UserPersonalStatsFullPublic = {
  personalstats: PersonalStatsAttackingPublic &
    PersonalStatsJobsPublic &
    PersonalStatsTrading &
    PersonalStatsJail &
    PersonalStatsHospital &
    PersonalStatsFinishingHits &
    PersonalStatsCommunication &
    PersonalStatsCrimes &
    PersonalStatsBounties &
    PersonalStatsItems &
    PersonalStatsTravel &
    PersonalStatsDrugs &
    PersonalStatsMissions &
    PersonalStatsRacing &
    PersonalStatsNetworthPublic &
    PersonalStatsOther;
};
