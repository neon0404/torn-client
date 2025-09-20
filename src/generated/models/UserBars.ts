import type { FactionOngoingChain, UserBar } from ".";

/** @category Models */
export type UserBars = {
  energy: UserBar;
  nerve: UserBar;
  happy: UserBar;
  life: UserBar;
  chain: FactionOngoingChain | unknown;
};
