import type {
  FactionSlotPositionInfo,
  TornOrganizedCrimeRequiredItem,
} from ".";

/** @category Models */
export type TornOrganizedCrimeSlot = {
  position_info: FactionSlotPositionInfo;
  name: string;
  required_item: TornOrganizedCrimeRequiredItem | null;
};
