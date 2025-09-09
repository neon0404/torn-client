import type { UserIconPrivate, UserIconPublic } from ".";

/** @category Models */
export type UserIconsResponse = {
  icons: UserIconPrivate[] | UserIconPublic[];
};
