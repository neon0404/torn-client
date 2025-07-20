import type { Requester } from "../../client/types";
import { PaginatedResponse } from "../../client/paginated";
import type {
  RaceClassEnum,
  RaceId,
  RaceTrackId,
  RacingCarUpgradesResponse,
  RacingCarsResponse,
  RacingLookupResponse,
  RacingRaceDetailsResponse,
  RacingRaceTypeEnum,
  RacingRacesResponse,
  RacingResponse,
  RacingSelectionName,
  RacingTrackRecordsResponse,
  RacingTracksResponse,
  TimestampResponse,
} from "../models";

/**
 * Access the Racing API endpoints
 * @category Endpoints
 */
export class RacingEndpoint {
  private readonly requester: Requester;

  constructor(requester: Requester) {
    this.requester = requester;
  }

  /**
   * Get cars and their racing stats
   * @param params - Optional query parameters
   */
  public async cars(params?: {
    timestamp?: string;
  }): Promise<RacingCarsResponse> {
    const path = `/racing/cars`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all possible car upgrades
   * @param params - Optional query parameters
   */
  public async carupgrades(params?: {
    timestamp?: string;
  }): Promise<RacingCarUpgradesResponse> {
    const path = `/racing/carupgrades`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get races
   * @param params - Optional query parameters
   */
  public async races(params?: {
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    cat?: RacingRaceTypeEnum;
    timestamp?: string;
  }): Promise<PaginatedResponse<RacingRacesResponse> & RacingRacesResponse> {
    const path = `/racing/races`;
    const query = {
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get race tracks and descriptions
   * @param params - Optional query parameters
   */
  public async tracks(params?: {
    timestamp?: string;
  }): Promise<RacingTracksResponse> {
    const path = `/racing/tracks`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get all available racing selections
   * @param params - Optional query parameters
   */
  public async lookup(params?: {
    timestamp?: string;
  }): Promise<RacingLookupResponse> {
    const path = `/racing/lookup`;
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
    const path = `/racing/timestamp`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /**
   * Get any Racing selection
   * @param params - Optional query parameters
   */
  public async get(params?: {
    selections?: RacingSelectionName[];
    id?: RaceId | RaceTrackId;
    limit?: number;
    sort?: "DESC" | "ASC";
    to?: number;
    from?: number;
    cat?: RacingRaceTypeEnum | RaceClassEnum;
    offset?: number;
    timestamp?: string;
  }): Promise<RacingResponse> {
    const path = `/racing`;
    const query = {
      ...(params?.selections && { selections: params.selections.join(",") }),
      ...(params?.id !== undefined && { id: params.id }),
      ...(params?.limit !== undefined && { limit: params.limit }),
      ...(params?.sort !== undefined && { sort: params.sort }),
      ...(params?.to !== undefined && { to: params.to }),
      ...(params?.from !== undefined && { from: params.from }),
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.offset !== undefined && { offset: params.offset }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }

  /** @param raceId - The ID for this context */
  public withRaceId(raceId: string | number): RacingRaceIdContext {
    return new RacingRaceIdContext(this.requester, raceId);
  }

  /** @param trackId - The ID for this context */
  public withTrackId(trackId: string | number): RacingTrackIdContext {
    return new RacingTrackIdContext(this.requester, trackId);
  }
}

/**
 * Context class for Racing API endpoints that require a "raceId"
 * @category Endpoints
 */
export class RacingRaceIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get specific race details
   * @param params - Optional query parameters
   */
  public async race(params?: {
    timestamp?: string;
  }): Promise<RacingRaceDetailsResponse> {
    const path = `/racing/${this.contextId}/race`;
    const query = {
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}

/**
 * Context class for Racing API endpoints that require a "trackId"
 * @category Endpoints
 */
export class RacingTrackIdContext {
  private readonly requester: Requester;
  private readonly contextId: string | number;

  constructor(requester: Requester, contextId: string | number) {
    this.requester = requester;
    this.contextId = contextId;
  }

  /**
   * Get track records
   * @param params - Optional query parameters
   */
  public async records(params?: {
    cat?: RaceClassEnum;
    timestamp?: string;
  }): Promise<RacingTrackRecordsResponse> {
    const path = `/racing/${this.contextId}/records`;
    const query = {
      ...(params?.cat !== undefined && { cat: params.cat }),
      ...(params?.timestamp !== undefined && { timestamp: params.timestamp }),
    };
    return this.requester(path, query);
  }
}
