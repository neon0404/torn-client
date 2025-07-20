import type { Requester } from "../../client/types";
import type {
  KeyInfoResponse,
  KeyLogResponse,
  KeyResponse,
  KeySelectionName,
} from "../models";

/**
 * Access the Key API endpoints
 * @category Endpoints
 */
export class KeyEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get current key log history
   * @param params - Optional query parameters
   */
  public async log(params?: {
    limit?: number;
    offset?: number;
    timestamp?: string;
  }): Promise<KeyLogResponse> {
    const path = `/key/log`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get current key info
   * @param params - Optional query parameters
   */
  public async info(params?: { timestamp?: string }): Promise<KeyInfoResponse> {
    const path = `/key/info`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Key selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: KeySelectionName[];
    limit?: number;
    offset?: number;
    timestamp?: string;
  }): Promise<KeyResponse> {
    const path = `/key`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
