import type { Bounty, RequestMetadataWithLinksAndTotal } from ".";

/** @category Models */
export type TornBountiesResponse = {
  bounties: Bounty[];
  bounties_timestamp: number;
  bounties_delay?: number;
  _metadata: RequestMetadataWithLinksAndTotal;
};
