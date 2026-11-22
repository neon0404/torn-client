import type { UserCriminalRecordV1, UserCriminalRecordV2 } from ".";

/** @category Models */
export type UserCriminalRecordResponse = {
  criminalrecord: UserCriminalRecordV2 | UserCriminalRecordV1;
};
