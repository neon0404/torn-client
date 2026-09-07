import type { FactionInventoryItem, RequestMetadataWithLinksAndTotal } from ".";

/** @category Models */
export type FactionInventoryResponse = {
  inventory_timestamp: number;
  inventory: FactionInventoryItem[];
  _metadata: RequestMetadataWithLinksAndTotal;
};
