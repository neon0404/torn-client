import type {
  ForumFeedTypeEnum,
  ForumPostId,
  ForumThreadAuthor,
  ForumThreadId,
} from ".";

/** @category Models */
export type ForumFeed = {
  thread_id: ForumThreadId;
  post_id: ForumPostId;
  user: ForumThreadAuthor;
  title: string;
  text: string;
  timestamp: number;
  is_seen: boolean;
  type: ForumFeedTypeEnum;
};
