import type { BazaarSpecialized, BazaarWeekly } from ".";

/** @category Models */
export type BazaarResponse = {
  bazaar: BazaarWeekly | BazaarSpecialized;
};
