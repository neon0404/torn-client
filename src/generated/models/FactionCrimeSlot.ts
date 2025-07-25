import type { FactionCrimeUser, ItemId, TornOrganizedCrimePositionId } from ".";

/** @category Models */
export type FactionCrimeSlot = {
  position: string;
  position_id: TornOrganizedCrimePositionId;
  position_number: number;
  item_requirement:
    | {
        id: ItemId;
        is_reusable: boolean;
        is_available: boolean;
      }
    | unknown;
  user: FactionCrimeUser | unknown;
  checkpoint_pass_rate: number;
};
