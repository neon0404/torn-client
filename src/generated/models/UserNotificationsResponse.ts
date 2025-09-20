/** @category Models */
export type UserNotificationsResponse = {
  notifications: {
    messages: number;
    events: number;
    awards: number;
    competition: number;
  };
};
