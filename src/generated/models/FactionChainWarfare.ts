import type { FactionChain, FactionId } from ".";

/** @category Models */
export type FactionChainWarfare = FactionChain & {
  faction: {
    id: FactionId;
    name: string;
  };
};
