import type { LogId, UserLogId } from ".";

/** @category Models */
export type UserLog = {
  id: UserLogId;
  timestamp: number;
  details: {
    id: LogId;
    title: string;
    category: string;
  };
  data: Record<string, unknown>;
  params: Record<string, unknown>;
};
