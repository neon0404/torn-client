import type {
  ApiKeyAccessTypeEnum,
  CompanyId,
  FactionId,
  FactionSelectionName,
  ForumSelectionName,
  KeyInfoAvailableLog,
  KeySelectionName,
  MarketSelectionName,
  RacingSelectionName,
  TornSelectionName,
  UserId,
  UserSelectionName,
} from ".";

/** @category Models */
export type KeyInfoResponse = {
  info: {
    selections: {
      company: string[];
      faction: FactionSelectionName[];
      market: MarketSelectionName[];
      property: string[];
      torn: TornSelectionName[];
      user: UserSelectionName[];
      racing: RacingSelectionName[];
      forum: ForumSelectionName[];
      key: KeySelectionName[];
    };
    user: {
      faction_id: FactionId | unknown;
      company_id: CompanyId | unknown;
      id: UserId;
    };
    access: {
      level: number;
      type: ApiKeyAccessTypeEnum;
      faction: boolean;
      company: boolean;
      log: {
        custom_permissions: boolean;
        available: KeyInfoAvailableLog[];
      };
    };
  };
};
