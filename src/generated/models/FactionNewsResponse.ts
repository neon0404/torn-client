import type { FactionNews, RequestMetadataWithLinks } from ".";

/** @category Models */
export type FactionNewsResponse = {
  news: FactionNews[];
  _metadata: RequestMetadataWithLinks;
};
