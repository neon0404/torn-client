import type {
  CompanyApplicationsResponse,
  CompanyEmployeesResponse,
  CompanyEmployeesResponseBasic,
  CompanyLookupResponse,
  CompanyProfileResponse,
  CompanyProfileResponseMixed,
  CompanyStockResponse,
  NewsResponse,
  TimestampResponse,
} from ".";

/** @category Models */
export type CompanyResponse =
  | CompanyApplicationsResponse
  | CompanyEmployeesResponse
  | CompanyEmployeesResponseBasic
  | CompanyProfileResponseMixed
  | CompanyProfileResponse
  | NewsResponse
  | CompanyStockResponse
  | CompanyLookupResponse
  | TimestampResponse;
