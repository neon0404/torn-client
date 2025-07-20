import type { FactionHofValues, FactionId } from ".";

/** @category Models */
export type TornFactionHof = {
  id: FactionId;
  name: string;
  members: number;
  position: number;
  rank: string;
  values: FactionHofValues;
};
