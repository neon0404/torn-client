import type { UserId } from ".";

/** @category Models */
export type Bounty = {
  target_id: UserId;
  target_name: string;
  target_level: number;
  lister_id: UserId | unknown;
  lister_name: string | unknown;
  reward: number;
  reason: string | unknown;
  quantity: number;
  is_anonymous: boolean;
  valid_until: number;
};
