import type { ReviveSetting, UserId, UserLastAction, UserStatus } from ".";

/**
 * Details about a faction member.
 * @category Models
 */
export type FactionMember = {
  id: UserId;
  name: string;
  position: string;
  level: number;
  days_in_faction: number;
  is_revivable: boolean;
  is_on_wall: boolean;
  is_in_oc: boolean;
  has_early_discharge: boolean;
  last_action: UserLastAction;
  status: UserStatus;
  revive_setting: ReviveSetting;
};
