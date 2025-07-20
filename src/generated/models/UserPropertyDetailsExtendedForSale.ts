import type { BasicUser, UserPropertyBasicDetails } from ".";

/** @category Models */
export type UserPropertyDetailsExtendedForSale = UserPropertyBasicDetails & {
  used_by: BasicUser[];
  status: "for_sale";
  cost: number;
};
