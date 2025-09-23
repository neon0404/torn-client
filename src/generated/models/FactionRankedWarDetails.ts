import type { FactionId, RankedWarId } from ".";

/** @category Models */
export type FactionRankedWarDetails = {
  id: RankedWarId;
  start: number;
  end: number;
  target: number;
  winner: FactionId | null;
  factions: {
    id: FactionId;
    name: string;
    score: number;
    chain: number;
  }[];
};
