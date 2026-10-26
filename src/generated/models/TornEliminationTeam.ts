import type {
  EliminationTeamId,
  TornEliminationTeamAttacksSummary,
  TornEliminationTeamCaptain,
} from ".";

/** @category Models */
export type TornEliminationTeam = {
  id: EliminationTeamId;
  name: string;
  participants: number;
  participants_left: number;
  position: number;
  score: number;
  lives: number;
  wins: number;
  losses: number;
  eliminated: boolean;
  attacking_summary: TornEliminationTeamAttacksSummary[];
  eliminated_timestamp: number | null;
  captains: {
    captain: TornEliminationTeamCaptain | null;
    vice_captains: TornEliminationTeamCaptain[];
  };
};
