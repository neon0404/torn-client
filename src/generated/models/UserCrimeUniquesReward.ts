import type {
  UserCrimeRewardItem,
  UserCrimeUniquesRewardAmmo,
  UserCrimeUniquesRewardMoney,
} from ".";

/** @category Models */
export type UserCrimeUniquesReward = {
  items: UserCrimeRewardItem[];
  money: UserCrimeUniquesRewardMoney | unknown;
  ammo: UserCrimeUniquesRewardAmmo | unknown;
};
