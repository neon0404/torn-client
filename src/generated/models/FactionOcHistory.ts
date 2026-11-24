import type { FactionCrimeId, FactionOcHistoryEntry } from ".";

/** @category Models */
export type FactionOcHistory = {
  crime_id: FactionCrimeId;
  history: FactionOcHistoryEntry[];
};
