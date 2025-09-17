import type { BasicUser, UserMessageId, UserMessageTypeEnum } from ".";

/** @category Models */
export type UserMessage = {
  id: UserMessageId;
  sender: BasicUser;
  timestamp: number;
  topic: string;
  type: UserMessageTypeEnum;
  seen: boolean;
  read: boolean;
};
