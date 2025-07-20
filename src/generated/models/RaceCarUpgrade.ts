import type {
  RaceCarUpgradeCategory,
  RaceCarUpgradeId,
  RaceCarUpgradeSubCategory,
  RaceClassEnum,
} from ".";

/** @category Models */
export type RaceCarUpgrade = {
  id: RaceCarUpgradeId;
  class_required: RaceClassEnum;
  name: string;
  description: string;
  category: RaceCarUpgradeCategory;
  subcategory: RaceCarUpgradeSubCategory;
  effects: {
    top_speed: number;
    acceleration: number;
    braking: number;
    handling: number;
    safety: number;
    dirt: number;
    tarmac: number;
  };
  cost: {
    points: number;
    cash: number;
  };
};
