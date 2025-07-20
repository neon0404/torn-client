import type { FactionBranchId, FactionStatEnum } from ".";

/** @category Models */
export type TornFactionTreeBranch = {
  id: FactionBranchId;
  name: string;
  upgrades: {
    name: string;
    level: number;
    ability: string;
    cost: number;
    challenge:
      | {
          description: string;
          amount_required: number;
          stat: FactionStatEnum;
        }
      | unknown;
  }[];
};
