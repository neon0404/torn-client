/**
 * An error returned by the Torn API
 * It contains an error code and a message from the API
 * @category Core
 */
export class TornApiError extends Error {
  public readonly code: number;

  constructor(errorResponse: { code: number; error: string }) {
    super(errorResponse.error);
    this.name = "TornApiError";
    this.code = errorResponse.code;
  }
}

/**
 * An error thrown when the request limit (100 per minute) is exceeded
 * This check is performed on the client side before the request is sent
 * @category Core
 */
export class TornRateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TornRateLimitError";
  }
}
