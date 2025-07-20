import type { ForumPost, RequestMetadataWithLinks } from ".";

/** @category Models */
export type UserForumPostsResponse = {
  forumPosts: ForumPost[];
  _metadata: RequestMetadataWithLinks;
};
