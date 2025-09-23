import type { UserId } from ".";

/** @category Models */
export type Bounty = {
  target_id: UserId;
  target_name: string;
  target_level: number;
  lister_id: UserId | null;
  lister_name: string | null;
  reward: number;
  reason: string | null;
  quantity: number;
  is_anonymous: boolean;
  valid_until: number;
};
