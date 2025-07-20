import type {
  BasicProperty,
  BasicUser,
  PropertyId,
  PropertyModificationEnum,
  PropertyStaffEnum,
} from ".";

/** @category Models */
export type UserPropertyBasicDetails = {
  id: PropertyId;
  owner: BasicUser;
  property: BasicProperty;
  happy: number;
  upkeep: {
    property: number;
    staff: number;
  };
  market_price: number;
  modifications: PropertyModificationEnum[];
  staff: {
    type: PropertyStaffEnum;
    amount: number;
  }[];
};
