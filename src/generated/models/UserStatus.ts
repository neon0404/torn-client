import type { UserPlaneImageTypeEnum, UserStatusStateEnum } from ".";

/**
 * Details about a user's status.
 * @category Models
 */
export type UserStatus = {
  description: string;
  details: string | null;
  state: UserStatusStateEnum | string;
  color: string;
  until: number | null;
  plane_image_type?: UserPlaneImageTypeEnum;
};
