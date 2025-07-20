import type { ForumPollVote } from ".";

/** @category Models */
export type ForumPoll = {
  question: string;
  answers_count: number;
  answers: ForumPollVote[];
};
