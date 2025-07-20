import type { ForumPoll, ForumThreadBase } from ".";

/** @category Models */
export type ForumThreadExtended = ForumThreadBase & {
  content: string;
  content_raw: string;
  poll: ForumPoll | unknown;
};
