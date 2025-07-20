import type {
  ForumCategoriesResponse,
  ForumLookupResponse,
  ForumPostsResponse,
  ForumThreadResponse,
  ForumThreadsResponse,
  TimestampResponse,
} from ".";

/** @category Models */
export type ForumResponse =
  | ForumCategoriesResponse
  | ForumThreadsResponse
  | ForumThreadResponse
  | ForumPostsResponse
  | ForumLookupResponse
  | TimestampResponse;
