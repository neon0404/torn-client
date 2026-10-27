import type { HalloweenBasketUpgradeId } from ".";

/** @category Models */
export type TornHalloweenUpgrade = {
  id: HalloweenBasketUpgradeId;
  name: string;
  description: string;
  flavor: string;
  cost: number;
  requirement: number;
};
