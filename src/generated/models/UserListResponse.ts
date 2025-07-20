import type { RequestMetadataWithLinks, UserList } from ".";

/** @category Models */
export type UserListResponse = {
  list: UserList[];
  _metadata: RequestMetadataWithLinks;
};
