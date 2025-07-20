import type { UserId } from ".";

/** @category Models */
export type FactionBalance = {
  faction: {
    money: number;
    points: number;
    scope: number;
  };
  members: {
    id: UserId;
    username: string;
    money: number;
    points: number;
  }[];
};
