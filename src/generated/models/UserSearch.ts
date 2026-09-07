import type {
  FactionId,
  UserIconPublic,
  UserId,
  UserLastActionStatusEnum,
} from ".";

/** @category Models */
export type UserSearch = {
  id: UserId;
  name: string;
  level: number;
  online: UserLastActionStatusEnum;
  faction_id: FactionId;
  icons: UserIconPublic[];
};
