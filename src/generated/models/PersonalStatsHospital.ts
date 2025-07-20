/** @category Models */
export type PersonalStatsHospital = {
  hospital: {
    times_hospitalized: number;
    medical_items_used: number;
    blood_withdrawn: number;
    reviving: {
      skill: number;
      revives: number;
      revives_received: number;
    };
  };
};
