/**
 * Details about a user's status.
 * @category Models
 */
export type UserStatus = {
  description: string;
  details: string | unknown;
  state: string;
  until: number | unknown;
};
