/** @category Models */
export type TornHeadline = {
  id: number | null;
  headline: string;
  link: string | null;
  type: string;
  importance: "normal" | "urgent";
  start_at: number;
  end_at: number;
};
