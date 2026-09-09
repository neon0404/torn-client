import type { FactionChainWarfare, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionWarfareChainsResponse = {
  warfarechains: FactionChainWarfare[];
  _metadata: RequestMetadataWithLinks;
};
