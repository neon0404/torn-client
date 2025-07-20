import type { Bazaar } from ".";

/** @category Models */
export type BazaarRecentFavorites = Bazaar & {
  recent_favorites: number;
};
