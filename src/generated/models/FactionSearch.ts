import type { FactionId, FactionSearchLeader } from ".";

/** @category Models */
export type FactionSearch = {
  id: FactionId;
  name: string;
  respect: number;
  members: number;
  leader: FactionSearchLeader;
  co_leader: FactionSearchLeader | null;
  image: string | null;
  tag_image: string | null;
  tag: string | null;
  is_destroyed: boolean;
  is_recruiting: boolean;
};
