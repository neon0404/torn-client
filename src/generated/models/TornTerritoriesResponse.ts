import type { RequestMetadataWithLinks, TornTerritory } from ".";

/** @category Models */
export type TornTerritoriesResponse = {
  territory: TornTerritory[];
  _metadata: RequestMetadataWithLinks;
};
