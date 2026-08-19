import type { FactionTerritoryWarfare, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionWarfareTerritoryWarsResponse = {
  warfareterritory: FactionTerritoryWarfare[];
  _metadata: RequestMetadataWithLinks;
};
