import { describe, expect } from 'vitest';
import { expectSuccess } from '../utils';

describe('MiscApi', () => {
  api('server is online', async ({ client }) => {
    const response = await client.misc.healthRaw();
    const healthStatus = await expectSuccess(response);

    expect(healthStatus).toBe('success');
  });
});
