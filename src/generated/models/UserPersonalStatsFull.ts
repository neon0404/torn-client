import type {
  PersonalStatsAttackingExtended,
  PersonalStatsBattleStats,
  PersonalStatsBounties,
  PersonalStatsCommunication,
  PersonalStatsCrimes,
  PersonalStatsDrugs,
  PersonalStatsFinishingHits,
  PersonalStatsHospital,
  PersonalStatsInvestments,
  PersonalStatsItems,
  PersonalStatsJail,
  PersonalStatsJobsExtended,
  PersonalStatsMissions,
  PersonalStatsNetworthExtended,
  PersonalStatsOther,
  PersonalStatsRacing,
  PersonalStatsTrading,
  PersonalStatsTravel,
} from ".";

/** @category Models */
export type UserPersonalStatsFull = {
  personalstats: PersonalStatsAttackingExtended &
    PersonalStatsBattleStats &
    PersonalStatsJobsExtended &
    PersonalStatsTrading &
    PersonalStatsJail &
    PersonalStatsHospital &
    PersonalStatsFinishingHits &
    PersonalStatsCommunication &
    PersonalStatsCrimes &
    PersonalStatsBounties &
    PersonalStatsInvestments &
    PersonalStatsItems &
    PersonalStatsTravel &
    PersonalStatsDrugs &
    PersonalStatsMissions &
    PersonalStatsRacing &
    PersonalStatsNetworthExtended &
    PersonalStatsOther;
};
