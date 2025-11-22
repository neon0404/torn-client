import type {
  AwardCrimesVersionEnum,
  HonorId,
  HonorRarityEnum,
  HonorTypeEnum,
} from ".";

/**
 * Properties 'circulation', 'equipped' & 'rarity' are only populated for honors which do not have type.id value 1.
 * @category Models
 */
export type TornHonor = {
  id: HonorId;
  name: string;
  description: string;
  type: {
    id: number;
    title: HonorTypeEnum;
  };
  circulation?: number;
  equipped?: number;
  rarity?: HonorRarityEnum;
  crimes_version?: AwardCrimesVersionEnum;
};
