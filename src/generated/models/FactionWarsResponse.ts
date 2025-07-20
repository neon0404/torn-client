import type { FactionPact, FactionWars } from ".";

/** @category Models */
export type FactionWarsResponse = {
  pacts: FactionPact[];
  wars: FactionWars;
};
