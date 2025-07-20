import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetails = UserPropertyBasicDetails & {
  used_by: BasicUser[];
};
