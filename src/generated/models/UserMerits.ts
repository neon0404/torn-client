import type { UserMeritUpgrade } from ".";

/** @category Models */
export type UserMerits = {
  upgrades: UserMeritUpgrade[];
  available: number;
  used: number;
  medals: number;
  honors: number;
};
