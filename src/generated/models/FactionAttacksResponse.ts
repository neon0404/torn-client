import type { Attack, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionAttacksResponse = {
  attacks: Attack[];
  _metadata: RequestMetadataWithLinks;
};
