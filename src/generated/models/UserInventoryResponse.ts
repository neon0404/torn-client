import type { RequestMetadataWithLinksAndTotal, UserInventory } from ".";

/** @category Models */
export type UserInventoryResponse = {
  inventory: UserInventory;
  _metadata: RequestMetadataWithLinksAndTotal;
};
