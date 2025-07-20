import type { ForumPost, RequestMetadataWithLinks } from ".";

/** @category Models */
export type ForumPostsResponse = {
  posts: ForumPost[];
  _metadata: RequestMetadataWithLinks;
};
