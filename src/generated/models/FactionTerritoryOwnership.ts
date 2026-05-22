import type { FactionId } from ".";

/** @category Models */
export type FactionTerritoryOwnership = {
  id: string;
  irradiated: boolean;
  owned_by: FactionId | null;
  acquired_at: number | null;
};
