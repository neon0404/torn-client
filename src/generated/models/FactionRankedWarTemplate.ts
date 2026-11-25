import type { FactionRankedWarMode, FactionRankedWarRule } from ".";

/** @category Models */
export type FactionRankedWarTemplate = {
  mode: FactionRankedWarMode | null;
  rules: FactionRankedWarRule[];
};
