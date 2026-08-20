import type { TornShopliftingSecurityStatus, TornSubCrimeId } from ".";

/** @category Models */
export type TornShoplifting = {
  id: TornSubCrimeId;
  status: TornShopliftingSecurityStatus[];
};
