import type { CompanyStaffRoomSizeEnum, CompanyStorageSizeEnum } from ".";

/** @category Models */
export type CompanyUpgrades = {
  staff_room: CompanyStaffRoomSizeEnum;
  storage: string;
  storage_capacity: CompanyStorageSizeEnum;
};
