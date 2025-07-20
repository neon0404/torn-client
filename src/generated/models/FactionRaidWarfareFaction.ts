import type { FactionId } from ".";

/**
 * The field 'chain' exists only if the field 'end' is NOT populated in FactionRaidWarfare schema.
 * @category Models
 */
export type FactionRaidWarfareFaction = {
  id: FactionId;
  name: string;
  score: number;
  chain?: number;
};
