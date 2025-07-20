import type {
  RequestMetadataWithLinks,
  UserPropertyBasicDetails,
  UserPropertyDetailsExtended,
  UserPropertyDetailsExtendedForRent,
  UserPropertyDetailsExtendedForSale,
  UserPropertyDetailsExtendedRented,
} from ".";

/** @category Models */
export type UserPropertiesResponse = {
  properties:
    | UserPropertyBasicDetails
    | UserPropertyDetailsExtended
    | UserPropertyDetailsExtendedRented
    | UserPropertyDetailsExtendedForRent
    | UserPropertyDetailsExtendedForSale[];
  _metadata: RequestMetadataWithLinks;
};
