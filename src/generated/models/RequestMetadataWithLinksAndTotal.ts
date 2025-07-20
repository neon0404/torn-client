import type { RequestLinks } from ".";

/** @category Models */
export type RequestMetadataWithLinksAndTotal = {
  links: RequestLinks;
  total?: number;
};
