import type { UserRpsStatus } from ".";

/** @category Models */
export type UserCompetitionRps = {
  name: "Rock, Paper, Scissors";
  status: UserRpsStatus;
  hp: {
    current: number;
    maximum: number;
  };
};
