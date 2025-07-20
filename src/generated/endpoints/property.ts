import type { Requester } from "../../client/types";
import type {
  PropertyId,
  PropertyLookupResponse,
  PropertyResponse,
  PropertySelectionName,
  TimestampResponse,
  UserPropertyResponse,
} from "../models";

/**
 * Access the Property API endpoints
 * @category Endpoints
 */
export class PropertyEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /** @param id - The ID for this context */
  public withId(id: string | number): PropertyIdContext {
    return new PropertyIdContext(this.requester, id);
  }

  /**
   * Get all available property selections
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<PropertyLookupResponse> {
    const path = `/property/lookup`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get current server time
   * @param params - Optional query parameters
   */
  public async timestamp(params?: {
    timestamp?: string;
  }): Promise<TimestampResponse> {
    const path = `/property/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any property selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: PropertySelectionName[];
    id?: PropertyId;
    timestamp?: string;
  }): Promise<PropertyResponse> {
    const path = `/property`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Property API endpoints that require a "id"
 * @category Endpoints
 */
export class PropertyIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get a specific property
   * @param params - Optional query parameters
   */
  public async get(params?: {
    timestamp?: string;
  }): Promise<UserPropertyResponse> {
    const path = `/property/${this.contextId}/property`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
