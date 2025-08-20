import type { UserGenderEnum, UserId, UserStatus } from ".";

/** @category Models */
export type UserBasic = {
  id: UserId;
  name: string;
  level: number;
  gender: UserGenderEnum;
  status: UserStatus;
};
