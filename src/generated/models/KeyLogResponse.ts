/** @category Models */
export type KeyLogResponse = {
  log: {
    timestamp: number;
    type: string;
    selections: string;
    id: number | string | unknown;
    comment?: string | unknown;
    ip: string;
  }[];
};
