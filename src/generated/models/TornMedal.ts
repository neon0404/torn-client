import type {
  AwardCrimesVersionEnum,
  HonorRarityEnum,
  MedalId,
  MedalTypeEnum,
} from ".";

/** @category Models */
export type TornMedal = {
  id: MedalId;
  name: string;
  description: string;
  type: {
    id: string;
    title: MedalTypeEnum;
  };
  circulation: number;
  rarity: HonorRarityEnum;
  crimes_version?: AwardCrimesVersionEnum;
};
