import type { RequestLinks } from ".";

/** @category Models */
export type RequestMetadataWithLinksAndNanostamp = {
  links: RequestLinks;
  nanostamp?: string;
};
