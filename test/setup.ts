import { test } from 'vitest';
import { Configuration } from '../src';
import { SimpleLoginClient } from '../src/simpleLoginClient';
import { createAccount } from './utils/createAccount';

/**
 * Test helper that creates a fresh account for each test and cleans up afterwards
 */
export const api = test.extend<{ client: SimpleLoginClient }>({
  // biome-ignore lint/correctness/noEmptyPattern: vitest fixture pattern
  client: async ({}, use) => {
    // Setup: Create account and get API key
    const account = await createAccount();

    if (!account) {
      throw new Error('Failed to create test account');
    }

    const { loginResponse, password, email } = account;

    const client = new SimpleLoginClient(
      new Configuration({
        basePath: 'http://localhost:7777/api',
        apiKey: loginResponse.apiKey,
      })
    );

    // Run the test
    await use(client);

    // Teardown: Delete the account
    try {
      // Enable sudo mode first (required for account deletion)
      await client.account.enableSudoMode({
        sudoPatch: {
          password,
        },
      });

      await client.account.deleteUser();
      console.log(`Test account ${email} deleted successfully`);
    } catch (error) {
      console.error(`Failed to delete test account ${email}:`, error);
      // Don't throw - we don't want cleanup failures to fail the test
    }
  },
});

// Make it available globally
declare global {
  // biome-ignore lint/suspicious/noRedeclare: global declaration for test fixture
  const api: typeof test;
}

globalThis.api = api;
