import type { FactionCrime, UserOrganizedCrimeError } from ".";

/** @category Models */
export type UserOrganizedCrimeResponse = {
  organizedCrime: FactionCrime | UserOrganizedCrimeError | unknown;
};
