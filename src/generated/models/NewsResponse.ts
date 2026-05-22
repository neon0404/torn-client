import type { News, RequestMetadataWithLinks } from ".";

/** @category Models */
export type NewsResponse = {
  news: News[];
  _metadata: RequestMetadataWithLinks;
};
