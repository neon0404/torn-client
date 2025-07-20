import type {
  FactionChainReportAttackerAttacks,
  FactionChainReportAttackerRespect,
  UserId,
} from ".";

/** @category Models */
export type FactionChainReportAttacker = {
  id: UserId;
  respect: FactionChainReportAttackerRespect;
  attacks: FactionChainReportAttackerAttacks;
};
