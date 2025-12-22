import { describe, expect } from 'vitest';
import { expectSuccess } from '../utils/matchers';

describe('AccountApi', () => {
  api('creates api key', async ({ client }) => {
    const response = await client.account.createApiKeyRaw({
      apiKeyPost: { device: 'test-device' },
    });

    const apiKey = await expectSuccess(response);
    expect(apiKey.apiKey).toBeDefined();
  });
});
