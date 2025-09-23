import type {
  TornOrganizedCrimePositionId,
  TornOrganizedCrimeRequiredItem,
} from ".";

/** @category Models */
export type TornOrganizedCrimeSlot = {
  id: TornOrganizedCrimePositionId;
  name: string;
  required_item: TornOrganizedCrimeRequiredItem | null;
};
