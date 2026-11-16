import type { UserHalloweenBasketUpgrade } from ".";

/** @category Models */
export type UserHalloween = {
  treats: {
    total: number;
    current: number;
  };
  basket_upgrades: UserHalloweenBasketUpgrade[];
};
