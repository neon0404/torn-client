import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetailsExtendedForRent = UserPropertyBasicDetails & {
  used_by: BasicUser[];
  status: "for_rent";
  cost: number;
  cost_per_day: number;
  rental_period: number;
  renter_asked?: BasicUser;
};
