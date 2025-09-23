import type { ForumThreadBase } from ".";

/** @category Models */
export type ForumThreadUserExtended = ForumThreadBase & {
  new_posts: number | null;
};
