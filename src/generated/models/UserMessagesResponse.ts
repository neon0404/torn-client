import type { RequestMetadataWithLinks, UserMessage } from ".";

/** @category Models */
export type UserMessagesResponse = {
  messages: UserMessage[];
  _metadata: RequestMetadataWithLinks;
};
