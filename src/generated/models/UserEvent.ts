import type { UserEventId } from ".";

/** @category Models */
export type UserEvent = {
  id: UserEventId;
  timestamp: number;
  event: string;
};
