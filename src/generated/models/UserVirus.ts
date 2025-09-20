import type { ItemId } from ".";

/** @category Models */
export type UserVirus = {
  item: {
    id: ItemId;
    name: string;
  };
  until: number;
};
