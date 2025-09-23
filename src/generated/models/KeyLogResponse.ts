/** @category Models */
export type KeyLogResponse = {
  log: {
    timestamp: number;
    type: string;
    selections: string;
    id: number | string | null;
    comment?: string | null;
    ip: string;
  }[];
};
