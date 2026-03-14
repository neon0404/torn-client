import type { PropertyId, UserId } from ".";

/** @category Models */
export type TradeItemProperty = {
  user_id: UserId;
  type: "Property";
  details: {
    id: PropertyId;
    happiness: number;
  };
};
