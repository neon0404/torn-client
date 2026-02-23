import type {
  FactionCrimeUser,
  FactionSlotPositionInfo,
  ItemId,
  TornOrganizedCrimePositionIdDeprecated,
} from ".";

/** @category Models */
export type FactionCrimeSlot = {
  position: string;
  position_info: FactionSlotPositionInfo;
  position_id?: TornOrganizedCrimePositionIdDeprecated;
  position_number?: number;
  item_requirement: {
    id: ItemId;
    is_reusable: boolean;
    is_available: boolean;
  } | null;
  user: FactionCrimeUser | null;
  checkpoint_pass_rate: number;
};
