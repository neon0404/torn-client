import type { FactionId } from ".";

/** @category Models */
export type UserFaction = {
  id: FactionId;
  name: string;
  tag: string;
  tag_image: string;
  position: string;
  days_in_faction: number;
};
