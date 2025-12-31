import type { AttackSimplified, RequestMetadataWithLinks } from ".";

/** @category Models */
export type AttacksFullResponse = {
  attacks: AttackSimplified[];
  _metadata: RequestMetadataWithLinks;
};
