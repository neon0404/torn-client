import type {
  UserCompetitionEasterEggs,
  UserCompetitionElimination,
  UserCompetitionHalloween,
  UserCompetitionRps,
} from ".";

/** @category Models */
export type UserCompetitionResponse = {
  competition:
    | UserCompetitionHalloween
    | UserCompetitionEasterEggs
    | UserCompetitionRps
    | UserCompetitionElimination;
};
