import type {
  FactionCrimeId,
  FactionOcHistoryItem,
  FactionOcHistoryPayoutDestinationEnum,
  FactionOcHistoryPayoutTypeEnum,
  FactionOcHistoryRole,
} from ".";

/** @category Models */
export type FactionOcHistoryPayoutReceivedDetails = {
  type: FactionOcHistoryPayoutTypeEnum;
  destination: FactionOcHistoryPayoutDestinationEnum | null;
  percentage: number;
  money: number | null;
  items: FactionOcHistoryItem[];
  role: FactionOcHistoryRole;
  crime_id: FactionCrimeId | null;
};
