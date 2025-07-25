import type {
  ApiKeyAccessTypeEnum,
  CompanyId,
  FactionId,
  FactionSelectionName,
  ForumSelectionName,
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
      faction_id?: FactionId | unknown;
      company: boolean;
      company_id?: CompanyId | unknown;
    };
  };
};
