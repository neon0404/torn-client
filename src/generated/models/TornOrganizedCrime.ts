import type {
  OrganizedCrimeName,
  TornOrganizedCrimeScope,
  TornOrganizedCrimeSlot,
  TornOrganizedCrimeSpawn,
} from ".";

/** @category Models */
export type TornOrganizedCrime = {
  name: OrganizedCrimeName;
  description: string;
  difficulty: number;
  spawn: TornOrganizedCrimeSpawn;
  scope: TornOrganizedCrimeScope;
  prerequisite: OrganizedCrimeName | unknown;
  slots: TornOrganizedCrimeSlot[];
};
