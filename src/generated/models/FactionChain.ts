import type { ChainId } from ".";

/** @category Models */
export type FactionChain = {
  id: ChainId;
  chain: number;
  respect: number;
  start: number;
  end: number;
};
