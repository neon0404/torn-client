import type { ItemId, TornRacketType } from ".";

/** @category Models */
export type TornRacketReward = {
  type: TornRacketType;
  quantity: number;
  id: ItemId | unknown;
};
