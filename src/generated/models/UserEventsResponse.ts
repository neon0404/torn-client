import type { RequestMetadataWithLinks, UserEvent } from ".";

/** @category Models */
export type UserEventsResponse = {
  events: UserEvent[];
  _metadata: RequestMetadataWithLinks;
};
