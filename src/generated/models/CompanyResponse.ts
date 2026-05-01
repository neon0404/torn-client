import type {
  CompanyApplicationsResponse,
  CompanyEmployeesResponse,
  CompanyEmployeesResponseBasic,
  CompanyLookupResponse,
  CompanyProfileResponse,
  CompanyProfileResponseMixed,
  CompanyStockResponse,
  TimestampResponse,
} from ".";

/** @category Models */
export type CompanyResponse =
  | CompanyApplicationsResponse
  | CompanyEmployeesResponse
  | CompanyEmployeesResponseBasic
  | CompanyProfileResponseMixed
  | CompanyProfileResponse
  | CompanyStockResponse
  | CompanyLookupResponse
  | TimestampResponse;
