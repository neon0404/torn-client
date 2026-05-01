import type { ApplicationStatusEnum, CompanyApplicationPlayer } from ".";

/** @category Models */
export type CompanyApplication = {
  player: CompanyApplicationPlayer;
  message: string | null;
  expires_at: number;
  status: ApplicationStatusEnum;
};
