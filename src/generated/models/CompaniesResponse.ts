import type { CompanyProfile, RequestMetadataWithLinksAndTotal } from ".";

/** @category Models */
export type CompaniesResponse = {
  companies: CompanyProfile[];
  companies_timestamp: number;
  companies_delay: number;
  _metadata: RequestMetadataWithLinksAndTotal;
};
