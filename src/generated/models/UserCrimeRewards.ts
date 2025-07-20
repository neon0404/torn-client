import type { UserCrimeRewardAmmo, UserCrimeRewardItem } from ".";

/** @category Models */
export type UserCrimeRewards = {
  money: number;
  ammo: UserCrimeRewardAmmo;
  items: UserCrimeRewardItem[];
};
