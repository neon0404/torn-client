import type { ForumThreadBase, RequestMetadataWithLinks } from ".";

/** @category Models */
export type ForumThreadsResponse = {
  threads: ForumThreadBase[];
  _metadata: RequestMetadataWithLinks;
};
