import type {
  UserCrimeRewardItem,
  UserCrimeUniquesRewardAmmo,
  UserCrimeUniquesRewardMoney,
} from ".";

/** @category Models */
export type UserCrimeUniquesReward = {
  items: UserCrimeRewardItem[];
  money: UserCrimeUniquesRewardMoney | null;
  ammo: UserCrimeUniquesRewardAmmo | null;
};
