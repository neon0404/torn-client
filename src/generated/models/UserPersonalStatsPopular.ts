import type {
  PersonalStatsAttackingPopular,
  PersonalStatsCrimesPopular,
  PersonalStatsDrugs,
  PersonalStatsHospitalPopular,
  PersonalStatsItemsPopular,
  PersonalStatsJobsPublic,
  PersonalStatsNetworthPublic,
  PersonalStatsOtherPopular,
  PersonalStatsTravelPopular,
} from ".";

/** @category Models */
export type UserPersonalStatsPopular = {
  personalstats: PersonalStatsAttackingPopular &
    PersonalStatsJobsPublic &
    PersonalStatsHospitalPopular &
    PersonalStatsCrimesPopular &
    PersonalStatsItemsPopular &
    PersonalStatsTravelPopular &
    PersonalStatsDrugs &
    PersonalStatsNetworthPublic &
    PersonalStatsOtherPopular;
};
