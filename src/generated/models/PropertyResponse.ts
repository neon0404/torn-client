import type {
  PropertyLookupResponse,
  TimestampResponse,
  UserPropertyResponse,
} from ".";

/** @category Models */
export type PropertyResponse =
  | UserPropertyResponse
  | PropertyLookupResponse
  | TimestampResponse;
