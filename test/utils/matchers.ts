import { expect } from 'vitest';
import { ResponseError } from '../../src/sdk/runtime';

/**
 * Custom matcher to verify a response has a successful status code (200-299).
 * Returns the unwrapped value from the response.
 *
 * **Important:** Use this with the `*Raw()` methods from the SDK that return the full ApiResponse.
 * For example, use `createApiKeyRaw()` instead of `createApiKey()`.
 *
 * @param response - The ApiResponse object from a `*Raw()` method call
 * @returns The unwrapped response value
 *
 * @example
 * // Basic usage
 * const response = await client.account.createApiKeyRaw({
 *   apiKeyPost: { device: 'test-device' }
 * });
 * const apiKey = await expectSuccess(response);
 * expect(apiKey.apiKey).toBeDefined();
 *
 * @example
 * // Checking specific status codes
 * const response = await client.account.createApiKeyRaw({
 *   apiKeyPost: { device: 'test-device' }
 * });
 * expect(response.raw.status).toBe(201); // Check specific status if needed
 * const apiKey = await expectSuccess(response);
 */
export async function expectSuccess<T>(response: {
  raw: Response;
  value(): Promise<T>;
}): Promise<T> {
  expect(response.raw.status).toBeGreaterThanOrEqual(200);
  expect(response.raw.status).toBeLessThan(300);

  const value = await response.value();
  return value;
}

/**
 * Custom matcher to verify an error is a ResponseError with the expected status code.
 * Throws if the error is not a ResponseError or has a different status code.
 *
 * Works with both `*Raw()` and regular SDK methods since both throw ResponseError on failure.
 *
 * @param error - The caught error from a failed API call
 * @param statusCode - The expected HTTP status code (e.g., 400, 401, 403, 404, 500)
 *
 * @example
 * // Testing authentication failure (401)
 * try {
 *   const client = new SimpleLoginClient(new Configuration({
 *     basePath: 'http://localhost:7777/api',
 *     apiKey: 'invalid-key'
 *   }));
 *   await client.account.getUserInfo();
 *   throw new Error('Should have thrown');
 * } catch (error) {
 *   expectError(error, 401);
 * }
 *
 * @example
 * // Testing bad request (400)
 * try {
 *   await client.account.login({
 *     authLoginPost: { email: 'invalid', password: 'invalid' }
 *   });
 *   throw new Error('Should have thrown');
 * } catch (error) {
 *   expectError(error, 400);
 * }
 *
 * @example
 * // Testing not found (404)
 * try {
 *   await client.alias.getAlias({ aliasId: 99999 });
 *   throw new Error('Should have thrown');
 * } catch (error) {
 *   expectError(error, 404);
 * }
 */
export function expectError(error: unknown, statusCode: number): void {
  expect(error).toBeInstanceOf(ResponseError);

  const responseError = error as ResponseError;
  expect(responseError.response).toBeDefined();
  expect(responseError.response.status).toBe(statusCode);
}

/**
 * Custom matcher to verify an error is a ResponseError with a status code in the client error range (400-499).
 *
 * @param error - The caught error from a failed API call
 *
 * @example
 * try {
 *   await client.alias.getAlias({ aliasId: 99999 });
 *   throw new Error('Should have thrown');
 * } catch (error) {
 *   expectClientError(error);
 * }
 */
export function expectClientError(error: unknown): void {
  expect(error).toBeInstanceOf(ResponseError);

  const responseError = error as ResponseError;
  expect(responseError.response).toBeDefined();
  expect(responseError.response.status).toBeGreaterThanOrEqual(400);
  expect(responseError.response.status).toBeLessThan(500);
}

/**
 * Custom matcher to verify an error is a ResponseError with a status code in the server error range (500-599).
 *
 * @param error - The caught error from a failed API call
 *
 * @example
 * try {
 *   await client.account.getSomeEndpoint();
 *   throw new Error('Should have thrown');
 * } catch (error) {
 *   expectServerError(error);
 * }
 */
export function expectServerError(error: unknown): void {
  expect(error).toBeInstanceOf(ResponseError);

  const responseError = error as ResponseError;
  expect(responseError.response).toBeDefined();
  expect(responseError.response.status).toBeGreaterThanOrEqual(500);
  expect(responseError.response.status).toBeLessThan(600);
}
