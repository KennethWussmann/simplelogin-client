import { test } from 'vitest';
import { Configuration } from '../src';
import type { UserInfo } from '../src/sdk/models/UserInfo';
import { SimpleLoginClient } from '../src/simpleLoginClient';
import { createAccount } from './utils/createAccount';

type AccountData = {
  loginResponse: { apiKey: string };
  password: string;
  email: string;
};

/**
 * Test helper that creates a fresh account for each test and cleans up afterwards
 */
export const api = test.extend<
  {
    client: SimpleLoginClient;
    user: UserInfo;
    password: string;
    email: string;
  },
  { accountData: AccountData }
>({
  // Worker fixture: creates account once per test
  accountData: [
    // biome-ignore lint/correctness/noEmptyPattern: vitest fixture pattern
    async ({}, use) => {
      // Setup: Create account and get API key
      const account = await createAccount();

      if (!account) {
        throw new Error('Failed to create test account');
      }

      const { loginResponse, password, email } = account;
      const accountData: AccountData = { loginResponse, password, email };

      // Provide account data to test fixtures
      await use(accountData);

      // Teardown: Delete the account
      try {
        const client = new SimpleLoginClient(
          new Configuration({
            basePath: 'http://localhost:7777/api',
            apiKey: loginResponse.apiKey,
          })
        );

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
    const client = new SimpleLoginClient(
      new Configuration({
        basePath: 'http://localhost:7777/api',
        apiKey: accountData.loginResponse.apiKey,
      })
    );
    await use(client);
  },
  user: async ({ client }, use) => {
    // Fetch current user info
    const userInfo = await client.account.getUserInfo();
    await use(userInfo);
  },
});

// Make it available globally
declare global {
  // biome-ignore lint/suspicious/noRedeclare: global declaration for test fixture
  const api: typeof test;
}

globalThis.api = api;
