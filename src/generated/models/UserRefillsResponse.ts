/** @category Models */
export type UserRefillsResponse = {
  refills: {
    energy: boolean;
    nerve: boolean;
    token: boolean;
    special_count: number;
  };
};
