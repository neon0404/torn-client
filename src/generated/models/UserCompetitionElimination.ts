import type { EliminationTeamId } from ".";

/** @category Models */
export type UserCompetitionElimination = {
  name: "Elimination";
  score: number;
  team: string;
  team_id: EliminationTeamId | null;
  attacks: number;
};
