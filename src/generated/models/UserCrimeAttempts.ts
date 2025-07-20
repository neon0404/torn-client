import type { UserSubcrime } from ".";

/** @category Models */
export type UserCrimeAttempts = {
  total: number;
  success: number;
  fail: number;
  critical_fail: number;
  subcrimes: UserSubcrime[];
};
