import type {
  UserCompetitionEasterEggs,
  UserCompetitionHalloween,
  UserCompetitionRps,
} from ".";

/** @category Models */
export type UserCompetitionResponse = {
  competition:
    | UserCompetitionHalloween
    | UserCompetitionEasterEggs
    | UserCompetitionRps;
};
