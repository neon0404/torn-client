/** @category Models */
export type PersonalStatsJobsExtended = {
  jobs: {
    job_points_used: number;
    trains_received: number;
    stats: {
      manual: number;
      intelligence: number;
      endurance: number;
      total: number;
    };
  };
};
