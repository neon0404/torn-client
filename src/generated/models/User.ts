/** @category Models */
export type User = {
  rank?: string;
  level?: number;
  honor?: number;
  gender?: string;
  property?: string;
  signup?: string;
  awards?: number;
  friends?: number;
  enemies?: number;
  forum_posts?: number;
  karma?: number;
  age?: number;
  role?: string;
  donator?: number;
  player_id?: number;
  name?: string;
  property_id?: number;
  revivable?: number;
  profile_image?: string;
  life?: {
    current?: number;
    maximum?: number;
    increment?: number;
    interval?: number;
    ticktime?: number;
    fulltime?: number;
  };
  status?: {
    description?: string;
    details?: string;
    state?: string;
    color?: string;
    until?: number;
  };
  job?: {
    job?: string;
    position?: string;
    company_id?: number;
    company_name?: string;
    company_type?: number;
  };
  faction?: {
    position?: string;
    faction_id?: number;
    days_in_faction?: number;
    faction_name?: string;
    faction_tag?: string;
    faction_tag_image?: string;
  };
  married?: {
    spouse_id?: number;
    spouse_name?: string;
    duration?: number;
  };
  basicicons?: {
    icon6?: string;
    icon4?: string;
    icon11?: string;
    icon10?: string;
    icon8?: string;
    icon73?: string;
    icon9?: string;
  };
  states?: {
    hospital_timestamp?: number;
    jail_timestamp?: number;
  };
  last_action?: {
    status?: string;
    timestamp?: number;
    relative?: string;
  };
  competition?: {
    name?: string;
    status?: string;
    current_hp?: number;
    max_hp?: number;
  };
};
