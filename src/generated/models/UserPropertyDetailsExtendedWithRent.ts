import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetailsExtendedWithRent = UserPropertyBasicDetails & {
  used_by: BasicUser[];
  rented_by?: BasicUser;
};
