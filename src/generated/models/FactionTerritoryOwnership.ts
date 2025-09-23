import type { FactionId } from ".";

/** @category Models */
export type FactionTerritoryOwnership = {
  id: string;
  owned_by: FactionId | null;
  acquired_at: number | null;
};
