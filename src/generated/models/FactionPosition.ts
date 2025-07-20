import type { FactionPositionAbilityEnum } from ".";

/** @category Models */
export type FactionPosition = {
  name: string;
  is_default: boolean;
  abilities: FactionPositionAbilityEnum[];
};
