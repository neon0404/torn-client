import type {
  FactionChainWarfare,
  FactionRaidWarfare,
  FactionRankedWarDetails,
  FactionTerritoryWarfare,
  FactionWarfareDirtyBomb,
  RequestMetadataWithLinks,
} from ".";

/** @category Models */
export type FactionWarfareResponse = {
  warfare:
    | FactionRankedWarDetails[]
    | FactionTerritoryWarfare[]
    | FactionChainWarfare[]
    | FactionRaidWarfare[]
    | FactionWarfareDirtyBomb[];
  _metadata: RequestMetadataWithLinks;
};
