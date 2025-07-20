import type {
  BazaarAdvancedItemSales,
  BazaarBargainSales,
  BazaarBulkSales,
  BazaarDollarSales,
  BazaarRecentFavorites,
  BazaarTotalFavorites,
  BazaarWeeklyCustomers,
  BazaarWeeklyIncome,
} from ".";

/** @category Models */
export type BazaarWeekly = {
  busiest: BazaarWeeklyCustomers[];
  most_popular: BazaarTotalFavorites[];
  trending: BazaarRecentFavorites[];
  top_grossing: BazaarWeeklyIncome[];
  bulk: BazaarBulkSales[];
  advanced_item: BazaarAdvancedItemSales[];
  bargain: BazaarBargainSales[];
  dollar_sale: BazaarDollarSales[];
};
