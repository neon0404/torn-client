import type { ForumThreadUserExtended, RequestMetadataWithLinks } from ".";

/** @category Models */
export type UserForumThreadsResponse = {
  forumThreads: ForumThreadUserExtended[];
  _metadata: RequestMetadataWithLinks;
};
