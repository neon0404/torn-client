import type { Attack, RequestMetadataWithLinks } from ".";

/** @category Models */
export type AttacksResponse = {
  attacks: Attack[];
  _metadata: RequestMetadataWithLinks;
};
