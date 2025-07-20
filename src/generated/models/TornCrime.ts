import type { TornCrimeId } from ".";

/** @category Models */
export type TornCrime = {
  id: TornCrimeId;
  name: string;
  category_id: number;
  category_name?: string;
  enhancer_id: number;
  enhancer_name: string;
  unique_outcomes_count: number;
  unique_outcomes_ids: number[];
  notes: string[];
};
