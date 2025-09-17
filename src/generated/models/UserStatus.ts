import type { UserPlaneImageTypeEnum, UserStatusStateEnum } from ".";

/**
 * Details about a user's status.
 * @category Models
 */
export type UserStatus = {
  description: string;
  details: string | unknown;
  state: UserStatusStateEnum | string;
  color: string;
  until: number | unknown;
  travel_type?: string;
  plane_image_type?: UserPlaneImageTypeEnum;
};
