import type { RequestMetadataWithLinks, UserDisplay } from ".";

/** @category Models */
export type UserDisplayResponse = {
  display: UserDisplay;
  _metadata: RequestMetadataWithLinks;
};
