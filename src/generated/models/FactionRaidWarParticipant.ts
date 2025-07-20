import type { FactionId } from ".";

/** @category Models */
export type FactionRaidWarParticipant = {
  id: FactionId;
  name: string;
  score: number;
  chain: number;
  is_aggressor: boolean;
};
