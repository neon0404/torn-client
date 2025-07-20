import type { FactionRaidWarfareFaction, RaidWarId } from ".";

/** @category Models */
export type FactionRaidWarfare = {
  id: RaidWarId;
  start: number;
  end: number | unknown;
  aggressor: FactionRaidWarfareFaction;
  defender: FactionRaidWarfareFaction;
};
