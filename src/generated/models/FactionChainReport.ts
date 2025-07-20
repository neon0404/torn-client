import type {
  ChainId,
  FactionChainReportAttacker,
  FactionChainReportBonus,
  FactionChainReportDetails,
  FactionId,
  UserId,
} from ".";

/** @category Models */
export type FactionChainReport = {
  id: ChainId;
  faction_id: FactionId;
  start: number;
  end: number;
  details: FactionChainReportDetails;
  bonuses: FactionChainReportBonus[];
  attackers: FactionChainReportAttacker[];
  non_attackers: UserId[];
};
