import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetailsExtended = UserPropertyBasicDetails & {
  used_by: BasicUser[];
  status: "none" | "in_use";
};
