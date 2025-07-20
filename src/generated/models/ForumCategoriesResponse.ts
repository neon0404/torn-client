import type { ForumId } from ".";

/** @category Models */
export type ForumCategoriesResponse = {
  categories: {
    id: ForumId;
    title: string;
    acronym: string;
    threads: number;
  }[];
};
