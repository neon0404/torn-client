import type { FactionId } from ".";

/** @category Models */
export type FactionRankedWarParticipant = {
  id: FactionId;
  name: string;
  score: number;
  chain: number;
};
