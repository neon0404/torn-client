import type {
  PropertyModificationEnum,
  PropertyStaffEnum,
  PropertyTypeId,
} from ".";

/** @category Models */
export type TornProperties = {
  properties?: {
    id: PropertyTypeId;
    name: string;
    cost: number;
    happy: number;
    upkeep: number;
    modifications: PropertyModificationEnum[];
    staff: PropertyStaffEnum[];
  }[];
};
