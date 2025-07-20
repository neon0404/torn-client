import type { FactionApplicationStatusEnum, UserId } from ".";

/** @category Models */
export type FactionApplication = {
  id: number;
  user: {
    id: UserId;
    name: string;
    level: number;
    stats:
      | {
          strength: number;
          speed: number;
          dexterity: number;
          defense: number;
        }
      | unknown;
  };
  message: string | unknown;
  valid_until: number;
  status: FactionApplicationStatusEnum;
};
