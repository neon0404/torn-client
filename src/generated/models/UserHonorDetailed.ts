import type { HonorId, UserHonorProgress } from ".";

/** @category Models */
export type UserHonorDetailed = {
  id: HonorId;
  name: string;
  description: string;
  is_unlocked: boolean;
  is_tracked: boolean;
  timestamp: number | null;
  progress: UserHonorProgress | null;
};
