import type {
  FactionOcHistoryItem,
  FactionOcHistoryPayoutDestinationEnum,
  FactionOcHistoryPayoutTypeEnum,
  UserId,
} from ".";

/** @category Models */
export type FactionOcHistoryPayoutDetails = {
  type: FactionOcHistoryPayoutTypeEnum;
  destination: FactionOcHistoryPayoutDestinationEnum | null;
  percentage: number;
  money: number | null;
  items: FactionOcHistoryItem[];
  participants: UserId[];
};
