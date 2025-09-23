import type { ForumPostId, ForumThreadAuthor, ForumThreadId, UserId } from ".";

/** @category Models */
export type ForumPost = {
  id: ForumPostId;
  thread_id: ForumThreadId;
  author: ForumThreadAuthor;
  is_legacy: boolean;
  is_topic: boolean;
  is_edited: boolean;
  is_pinned: boolean;
  created_time: number;
  edited_by: UserId | null;
  has_quote: boolean;
  quoted_post_id: number | null;
  content: string;
  likes: number;
  dislikes: number;
};
