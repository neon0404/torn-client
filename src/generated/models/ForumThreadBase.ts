import type { ForumId, ForumThreadAuthor, ForumThreadId } from ".";

/** @category Models */
export type ForumThreadBase = {
  id: ForumThreadId;
  title: string;
  forum_id: ForumId;
  posts: number;
  rating: number;
  views: number;
  author: ForumThreadAuthor;
  last_poster: ForumThreadAuthor | unknown;
  first_post_time: number;
  last_post_time: number | unknown;
  has_poll: boolean;
  is_locked: boolean;
  is_sticky: boolean;
};
