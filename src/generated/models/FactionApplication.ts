import type { FactionApplicationStatusEnum, UserId } from ".";

/** @category Models */
export type FactionApplication = {
  id: number;
  user: {
    id: UserId;
    name: string;
    level: number;
    stats: {
      strength: number;
      speed: number;
      dexterity: number;
      defense: number;
    } | null;
  };
  message: string | null;
  valid_until: number;
  status: FactionApplicationStatusEnum;
};
