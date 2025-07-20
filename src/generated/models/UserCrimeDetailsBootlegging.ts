/** @category Models */
export type UserCrimeDetailsBootlegging = {
  online_store: {
    earnings: number;
    visits: number;
    customers: number;
    sales: number;
  };
  dvd_sales: {
    action: number;
    comedy: number;
    drama: number;
    fantasy: number;
    horror: number;
    romance: number;
    thriller: number;
    sci_fi: number;
    total: number;
    earnings: number;
  };
  dvds_copied?: number;
};
