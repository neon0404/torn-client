import type { UserId } from ".";

/** @category Models */
export type ReportAnonymousBounties = {
  bounties: {
    text: string;
    bounty: number;
    user: {
      id: UserId;
      name: string;
    } | null;
  }[];
};
