import type { FactionId } from ".";

/** @category Models */
export type FactionPact = {
  faction_id: FactionId;
  faction_name: string;
  until: string;
};
