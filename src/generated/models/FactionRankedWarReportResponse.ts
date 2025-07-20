import type { FactionId, ItemId, RankedWarId, UserId } from ".";

/** @category Models */
export type FactionRankedWarReportResponse = {
  rankedwarreport: {
    id: RankedWarId;
    start: number;
    end: number;
    winner: FactionId;
    forfeit: boolean;
    factions: {
      id: FactionId;
      name: string;
      score: number;
      attacks: number;
      rank: {
        before: string;
        after: string;
      };
      rewards: {
        respect: number;
        points: number;
        items: {
          id: ItemId;
          name: string;
          quantity: number;
        }[];
      };
      members: {
        id: UserId;
        name: string;
        level: number;
        attacks: number;
        score: number;
      }[];
    }[];
  };
};
