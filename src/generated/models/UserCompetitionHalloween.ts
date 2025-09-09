import type { ItemId } from ".";

/** @category Models */
export type UserCompetitionHalloween = {
  name: "Halloween";
  treats_collected: number;
  basket: {
    id: ItemId;
    name: string;
  };
};
