import type { RequestMetadataWithLinks, UserBazaar } from ".";

/** @category Models */
export type UserBazaarResponse = {
  bazaar: UserBazaar;
  _metadata: RequestMetadataWithLinks;
};
