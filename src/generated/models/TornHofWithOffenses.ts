import type { TornHofBasic } from ".";

/** @category Models */
export type TornHofWithOffenses = TornHofBasic & {
  criminal_offenses: number;
};
