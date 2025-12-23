import { describe, expect, test } from 'vitest';
import { SimpleLoginClient } from '../../src';
import { DEFAULT_API_CLIENT_CONFIG } from '../setup';
import { expectSuccess } from '../utils';

describe('MiscApi', () => {
  test('server is online', async () => {
    const client = new SimpleLoginClient(DEFAULT_API_CLIENT_CONFIG);

    const response = await client.misc.healthRaw();
    const healthStatus = await expectSuccess(response);

    expect(healthStatus).toBe('success');
  });
});
