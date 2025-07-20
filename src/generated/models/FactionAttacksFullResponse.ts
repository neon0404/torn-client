import type { AttackSimplified, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionAttacksFullResponse = {
  attacks: AttackSimplified[];
  _metadata: RequestMetadataWithLinks;
};
