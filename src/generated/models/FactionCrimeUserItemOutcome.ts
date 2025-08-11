import type {
  FactionCrimeItemOutcomeEnum,
  FactionCrimeUserItemOutcomeEnum,
  ItemId,
  ItemUid,
} from ".";

/** @category Models */
export type FactionCrimeUserItemOutcome = {
  owned_by: FactionCrimeUserItemOutcomeEnum;
  item_id: ItemId;
  item_uid: ItemUid;
  outcome: FactionCrimeItemOutcomeEnum;
};
