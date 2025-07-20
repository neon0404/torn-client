import type { UserId } from ".";

/** @category Models */
export type FactionContributor = {
  id: UserId;
  username: string;
  value: number;
  in_faction: boolean;
};
