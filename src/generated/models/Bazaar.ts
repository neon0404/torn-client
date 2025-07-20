import type { UserId } from ".";

/** @category Models */
export type Bazaar = {
  id: UserId;
  name: string;
  is_open: boolean;
};
