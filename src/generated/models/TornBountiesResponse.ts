import type { Bounty, RequestMetadataWithLinks } from ".";

/** @category Models */
export type TornBountiesResponse = {
  bounties: Bounty[];
  _metadata: RequestMetadataWithLinks;
};
