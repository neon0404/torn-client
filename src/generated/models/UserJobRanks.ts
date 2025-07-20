import type {
  JobPositionArmyEnum,
  JobPositionCasinoEnum,
  JobPositionEducationEnum,
  JobPositionGrocerEnum,
  JobPositionLawEnum,
  JobPositionMedicalEnum,
} from ".";

/** @category Models */
export type UserJobRanks = {
  army: JobPositionArmyEnum;
  grocer: JobPositionGrocerEnum;
  casino: JobPositionCasinoEnum;
  medical: JobPositionMedicalEnum;
  law: JobPositionLawEnum;
  education: JobPositionEducationEnum;
};
