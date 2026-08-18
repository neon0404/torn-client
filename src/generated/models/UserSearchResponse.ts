import type { RequestMetadataWithLinksAndTotal, UserSearch } from ".";

/** @category Models */
export type UserSearchResponse = {
  search: UserSearch[];
  _metadata: RequestMetadataWithLinksAndTotal;
};
