import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetailsExtendedRented = UserPropertyBasicDetails & {
  used_by: BasicUser[];
  status: "rented";
  cost: number;
  cost_per_day: number;
  rental_period: number;
  rental_period_remaining: number;
  rented_by: BasicUser;
};
