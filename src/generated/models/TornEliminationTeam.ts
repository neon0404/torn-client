import type { BasicUser, EliminationTeamId } from ".";

/** @category Models */
export type TornEliminationTeam = {
  id: EliminationTeamId;
  name: string;
  participants: number;
  position: number;
  score: number;
  lives: number;
  wins: number;
  losses: number;
  eliminated: boolean;
  eliminated_timestamp: number | null;
  leaders: BasicUser[];
};
