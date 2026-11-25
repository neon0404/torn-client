import type { FactionId, FactionRankedWarTemplate, RankedWarId } from ".";

/** @category Models */
export type FactionRankedWarDetails = {
  template: FactionRankedWarTemplate;
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
