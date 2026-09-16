import type { PokerTableId } from ".";

/** @category Models */
export type TornPokerTable = {
  id: PokerTableId;
  name: string;
  blinds: {
    big: number;
    small: number;
  };
  players: {
    current: number;
    maximum: number;
  };
  speed: number;
};
