import type { FactionChain, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionChainsResponse = {
  chains: FactionChain[];
  _metadata: RequestMetadataWithLinks;
};
