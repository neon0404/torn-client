import type {
  ForumId,
  ForumSubscribedThreadPostsCount,
  ForumThreadAuthor,
  ForumThreadId,
} from ".";

/** @category Models */
export type ForumSubscribedThread = {
  id: ForumThreadId;
  forum_id: ForumId;
  author: ForumThreadAuthor;
  title: string;
  posts: ForumSubscribedThreadPostsCount;
};
