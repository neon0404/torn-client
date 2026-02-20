import type {
  FactionSlotPositionInfo,
  TornOrganizedCrimePositionIdDeprecated,
  TornOrganizedCrimeRequiredItem,
} from ".";

/** @category Models */
export type TornOrganizedCrimeSlot = {
  id?: TornOrganizedCrimePositionIdDeprecated;
  position_info: FactionSlotPositionInfo;
  name: string;
  required_item: TornOrganizedCrimeRequiredItem | null;
};
