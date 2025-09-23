import type {
  DirtyBombId,
  FactionWarfareDirtyBombPlanter,
  FactionWarfareDirtyBombTargetFaction,
} from ".";

/** @category Models */
export type FactionWarfareDirtyBomb = {
  id: DirtyBombId;
  planted_at: number;
  detonated_at: number;
  faction: FactionWarfareDirtyBombTargetFaction;
  user: FactionWarfareDirtyBombPlanter | null;
};
