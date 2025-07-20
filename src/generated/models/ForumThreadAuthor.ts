import type { UserId } from ".";

/** @category Models */
export type ForumThreadAuthor = {
  id: UserId;
  username: string;
  karma: number;
};
