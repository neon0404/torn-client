/** @category Models */
export type UserCooldownsResponse = {
  cooldowns: {
    drug: number;
    medical: number;
    booster: number;
  };
};
