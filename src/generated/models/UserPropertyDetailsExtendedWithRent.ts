import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetailsExtendedWithRent = UserPropertyBasicDetails & {
  used_by: BasicUser[];
  status: "none" | "in_use";
  rented_by?: BasicUser;
};
