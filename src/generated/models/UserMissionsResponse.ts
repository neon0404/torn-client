import type {
  MissionDifficultyEnum,
  MissionRewardDetailsAmmo,
  MissionRewardDetailsItem,
  MissionRewardDetailsUpgrade,
  MissionRewardUpgrade,
  MissionStatusEnum,
  UserId,
} from ".";

/** @category Models */
export type UserMissionsResponse = {
  missions: {
    credits: number;
    givers: {
      id: UserId;
      name: string;
      contracts: {
        title: string;
        difficulty: MissionDifficultyEnum;
        status: MissionStatusEnum;
        created_at: number;
        started_at: number | null;
        expires_at: number | null;
        completed_at: number | null;
        rewards: {
          money: number;
          credits: number;
        } | null;
      }[];
    }[];
    rewards: {
      type: MissionRewardUpgrade;
      details:
        | MissionRewardDetailsAmmo
        | MissionRewardDetailsUpgrade
        | MissionRewardDetailsItem;
      amount: number;
      cost: number;
      expires_at: number;
    }[];
  };
};
