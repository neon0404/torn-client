import type { UserBazaarItem } from ".";

/** @category Models */
export type UserBazaar = {
  exists: boolean;
  is_open: boolean;
  items: UserBazaarItem[];
};
