import type { FactionId, FactionSearchLeader } from ".";

/** @category Models */
export type FactionSearch = {
  id: FactionId;
  name: string;
  respect: number;
  members: number;
  leader: FactionSearchLeader;
  co_leader: FactionSearchLeader | unknown;
  image: string | unknown;
  tag_image: string | unknown;
  tag: string | unknown;
  is_destroyed: boolean;
  is_recruiting: boolean;
};
