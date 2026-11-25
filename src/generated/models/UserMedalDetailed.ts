import type { MedalId, UserMedalProgress } from ".";

/** @category Models */
export type UserMedalDetailed = {
  id: MedalId;
  name: string;
  description: string;
  is_unlocked: boolean;
  timestamp: number | null;
  progress: UserMedalProgress | null;
};
