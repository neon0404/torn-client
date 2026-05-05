import type { CompanyApplicationPlayerStats, UserId } from ".";

/** @category Models */
export type CompanyApplicationPlayer = {
  id: UserId;
  name: string;
  level: number;
  stats: CompanyApplicationPlayerStats;
};
