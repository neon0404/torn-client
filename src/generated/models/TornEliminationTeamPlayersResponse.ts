import type { RequestMetadataWithLinks, TornEliminationTeamPlayer } from ".";

/** @category Models */
export type TornEliminationTeamPlayersResponse = {
  eliminationteam: TornEliminationTeamPlayer[];
  _metadata: RequestMetadataWithLinks;
};
