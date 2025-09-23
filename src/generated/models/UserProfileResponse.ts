import type {
  FactionId,
  HonorId,
  ProfileSpouse,
  PropertyId,
  UserDonatorStatusEnum,
  UserGenderEnum,
  UserId,
  UserLastAction,
  UserRankEnum,
  UserRoleEnum,
  UserStatus,
  UserTitleEnum,
} from ".";

/** @category Models */
export type UserProfileResponse = {
  profile: {
    id: UserId;
    name: string;
    level: number;
    rank: UserRankEnum | string;
    title: UserTitleEnum | string;
    donator_status: UserDonatorStatusEnum | null;
    age: number;
    signed_up: number;
    faction_id: FactionId | null;
    honor_id: HonorId;
    property: {
      id: PropertyId;
      name: string;
    };
    image: string | null;
    gender: UserGenderEnum;
    revivable: boolean;
    role: UserRoleEnum;
    status: UserStatus;
    spouse: ProfileSpouse | null;
    awards: number;
    friends: number;
    enemies: number;
    forum_posts: number;
    karma: number;
    last_action: UserLastAction;
    life: {
      current: number;
      maximum: number;
    };
  };
};
