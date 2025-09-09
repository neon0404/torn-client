import type { UserIconPublic } from ".";

/** @category Models */
export type UserIconPrivate = UserIconPublic & {
  until: number | unknown;
};
