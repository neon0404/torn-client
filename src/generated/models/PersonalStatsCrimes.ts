import type { PersonalStatsCrimesV1, PersonalStatsCrimesV2 } from ".";

/**
 * Response for PersonalStatsCrimes depends on which crime version user is currently.
 * @category Models
 */
export type PersonalStatsCrimes = {
  crimes: PersonalStatsCrimesV1 | PersonalStatsCrimesV2;
};
