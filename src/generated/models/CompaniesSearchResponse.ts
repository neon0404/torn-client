import type { CompanySearchProfile, RequestMetadataWithLinks } from ".";

/** @category Models */
export type CompaniesSearchResponse = {
  search: CompanySearchProfile[];
  _metadata: RequestMetadataWithLinks;
};
