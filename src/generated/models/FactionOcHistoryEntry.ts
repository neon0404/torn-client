import type {
  BasicUser,
  FactionOcHistoryActionEnum,
  FactionOcHistoryInjuryDetails,
  FactionOcHistoryItem,
  FactionOcHistoryPayoutDetails,
  FactionOcHistoryPayoutReceivedDetails,
  FactionOcHistoryPunishmentDetails,
  FactionOcHistoryRoleChangeDetails,
  FactionOcHistoryRoleDetails,
  FactionOcHistorySpawnDetails,
} from ".";

/** @category Models */
export type FactionOcHistoryEntry = {
  id: number;
  timestamp: number;
  action: FactionOcHistoryActionEnum;
  user: BasicUser | null;
  performed_by: BasicUser | null;
  text: string;
  details:
    | FactionOcHistoryRoleDetails
    | FactionOcHistoryRoleChangeDetails
    | FactionOcHistorySpawnDetails
    | FactionOcHistoryItem
    | FactionOcHistoryPunishmentDetails
    | FactionOcHistoryInjuryDetails
    | FactionOcHistoryPayoutDetails
    | FactionOcHistoryPayoutReceivedDetails
    | null;
};
