import type { FactionId } from ".";

/** @category Models */
export type FactionTerritoryOwnership = {
  id: string;
  owned_by: FactionId | unknown;
  acquired_at: number | unknown;
};
