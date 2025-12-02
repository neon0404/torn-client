import type { DiscordId, UserId } from ".";

/** @category Models */
export type UserDiscordResponse = {
  discord: {
    discord_id: DiscordId;
    user_id: UserId;
  };
};
