import { beforeAll, test } from 'vitest';
import type { UserInfo } from '../src/sdk/models/UserInfo';
import { SimpleLoginClient, type SimpleLoginClientOptions } from '../src/simpleLoginClient';
import { getAuthenticatedClient } from './utils/apiClient';

export const DEFAULT_API_CLIENT_CONFIG: SimpleLoginClientOptions = {
  url: 'http://localhost:7777',
};
const client = new SimpleLoginClient(DEFAULT_API_CLIENT_CONFIG);

const checkServerAvailability = async (): Promise<void> => {
  const maxRetryDuration = 30000;
  const retryInterval = 1000;
  const startTime = Date.now();

  while (Date.now() - startTime < maxRetryDuration) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await client.misc.healthRaw({
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.raw.ok) {
        throw new Error(`Health check failed with status ${response.raw.status}`);
      }

      const healthStatus = await response.value();
      if (healthStatus !== 'success') {
        throw new Error(`Health check returned unexpected status: ${healthStatus}`);
      }

      return;
    } catch (error) {
      const elapsed = Date.now() - startTime;
      if (elapsed >= maxRetryDuration) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            throw new Error(
              `API server at ${client.config.basePath} is not responding (timeout after 30s). ` +
                'Please ensure the SimpleLogin server is running.'
            );
          }
          throw new Error(
            `API server at ${client.config.basePath} is not available: ${error.message}. ` +
              'Please ensure the SimpleLogin server is running.'
          );
        }
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, retryInterval));
    }
  }
};

beforeAll(async () => {
  await checkServerAvailability();
});

type AccountData = {
  loginResponse: { apiKey: string };
  password: string;
  email: string;
};

/**
 * Test helper that creates a fresh account for each test and cleans up afterwards
 */
export const api = test.extend<{
  client: SimpleLoginClient;
  user: UserInfo;
  password: string;
  email: string;
  accountData: AccountData;
}>({
  // Worker fixture: creates account once per test
  accountData: [
    // biome-ignore lint/correctness/noEmptyPattern: vitest fixture pattern
    async ({}, use) => {
      // Setup: Create account and get API key
      const { account } = await getAuthenticatedClient();

      if (!account) {
        throw new Error('Failed to create test account');
      }

      const { loginResponse, password, email } = account;
      const accountData: AccountData = { loginResponse, password, email };

      // Provide account data to test fixtures
      await use(accountData);

      // Teardown: Delete the account
      try {
        const client = new SimpleLoginClient({
          ...DEFAULT_API_CLIENT_CONFIG,
          apiKey: loginResponse.apiKey,
        });

        // Enable sudo mode first (required for account deletion)
        await client.account.enableSudoMode({
          sudoPatch: {
            password,
          },
        });

        await client.account.deleteUser();
      } catch (error) {
        console.error(`Failed to delete test account ${email}:`, error);
        // Don't throw - we don't want cleanup failures to fail the test
      }
    },
    { scope: 'test' },
  ],
  password: async ({ accountData }, use) => {
    await use(accountData.password);
  },
  email: async ({ accountData }, use) => {
    await use(accountData.email);
  },
  client: async ({ accountData }, use) => {
    const client = new SimpleLoginClient({
      ...DEFAULT_API_CLIENT_CONFIG,
      apiKey: accountData.loginResponse.apiKey,
    });
    await use(client);
  },
  user: async ({ client }, use) => {
    // Fetch current user info
    const userInfo = await client.account.getUserInfo();
    await use(userInfo);
  },
});
