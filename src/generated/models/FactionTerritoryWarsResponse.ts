import type {
  FactionTerritoryWarFinished,
  FactionTerritoryWarOngoing,
} from ".";

/** @category Models */
export type FactionTerritoryWarsResponse = {
  territorywars: FactionTerritoryWarOngoing[] | FactionTerritoryWarFinished[];
};
