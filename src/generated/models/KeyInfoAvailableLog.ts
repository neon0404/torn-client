import type { LogCategoryId, LogId } from ".";

/** @category Models */
export type KeyInfoAvailableLog = {
  category_id: LogCategoryId;
  log_ids: LogId[];
};
