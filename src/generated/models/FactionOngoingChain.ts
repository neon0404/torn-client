import type { ChainId } from ".";

/** @category Models */
export type FactionOngoingChain = {
  id: ChainId;
  current: number;
  max: number;
  timeout: number;
  modifier: number;
  cooldown: number;
  start: number;
  end: number;
};
