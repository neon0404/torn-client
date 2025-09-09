import type {
  JobPositionArmyEnum,
  JobPositionCasinoEnum,
  JobPositionEducationEnum,
  JobPositionGrocerEnum,
  JobPositionLawEnum,
  JobPositionMedicalEnum,
  JobTypeEnum,
} from ".";

/** @category Models */
export type UserJob = {
  type: "job";
  name: JobTypeEnum;
  position:
    | JobPositionArmyEnum
    | JobPositionGrocerEnum
    | JobPositionCasinoEnum
    | JobPositionMedicalEnum
    | JobPositionLawEnum
    | JobPositionEducationEnum;
};
