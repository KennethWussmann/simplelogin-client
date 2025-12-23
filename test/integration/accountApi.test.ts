import { randEmail, randPassword } from '@ngneat/falso';
import { beforeAll, describe, expect, test } from 'vitest';
import { Configuration, SimpleLoginClient } from '../../src';
import { AccountApi } from '../../src/sdk/apis/AccountApi';
import { createAccount } from '../utils';
import { waitForSimpleLoginRegistrationCode } from '../utils/mailHog';
import { expectClientError, expectError, expectSuccess } from '../utils/matchers';

describe('AccountApi', () => {
  describe('User Info', () => {
    api('gets user info', async ({ client, user }) => {
      const response = await client.account.getUserInfoRaw();

      const userInfo = await expectSuccess(response);
      expect(userInfo).toEqual(
        expect.objectContaining({
          email: user.email,
          name: expect.any(String),
          inTrial: expect.any(Boolean),
          maxAliasFreePlan: expect.any(Number),
        })
      );
    });

    api('updates user info', async ({ client, user }) => {
      const newName = 'Updated Test Name';

      const response = await client.account.updateUserInfoRaw({
        userInfoPatch: {
          name: newName,
        },
      });

      const updatedInfo = await expectSuccess(response);
      expect(updatedInfo).toEqual(
        expect.objectContaining({
          email: user.email,
          name: newName,
        })
      );
    });

    api('updates user name', async ({ client }) => {
      const response = await client.account.updateUserInfoRaw({
        userInfoPatch: {
          name: 'Test User',
        },
      });

      const updatedInfo = await expectSuccess(response);
      expect(updatedInfo.name).toBe('Test User');
    });
  });

  describe('API Keys', () => {
    api('creates api key', async ({ client }) => {
      const response = await client.account.createApiKeyRaw({
        apiKeyPost: { device: 'test-device' },
      });

      const apiKey = await expectSuccess(response);
      expect(apiKey).toEqual(
        expect.objectContaining({
          apiKey: expect.any(String),
        })
      );
      expect(apiKey.apiKey.length).toBeGreaterThan(0);
    });
  });

  describe('Stats', () => {
    api('gets user stats', async ({ client }) => {
      const response = await client.account.getStatsRaw();

      const stats = await expectSuccess(response);
      expect(stats).toEqual(
        expect.objectContaining({
          nbAlias: expect.any(Number),
          nbForward: expect.any(Number),
          nbBlock: expect.any(Number),
          nbReply: expect.any(Number),
        })
      );
      expect(stats.nbAlias).toBeGreaterThanOrEqual(0);
      expect(stats.nbForward).toBeGreaterThanOrEqual(0);
      expect(stats.nbBlock).toBeGreaterThanOrEqual(0);
      expect(stats.nbReply).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Cookie Token', () => {
    api('gets cookie token', async ({ client }) => {
      const response = await client.account.getCookieTokenRaw();

      const tokenInfo = await expectSuccess(response);
      expect(tokenInfo).toEqual(
        expect.objectContaining({
          token: expect.any(String),
        })
      );
      expect(tokenInfo.token.length).toBeGreaterThan(0);
    });
  });

  describe('Logout', () => {
    api('logs out user', async ({ client }) => {
      const response = await client.account.logoutRaw();

      const result = await expectSuccess(response);
      expect(result).toBeDefined();
    });
  });

  describe('Sudo Mode', () => {
    api('enables sudo mode with correct password', async ({ client, password }) => {
      const response = await client.account.enableSudoModeRaw({
        sudoPatch: {
          password,
        },
      });

      const result = await expectSuccess(response);
      expect(result).toBeDefined();
    });

    api('rejects sudo mode with wrong password', async ({ client }) => {
      try {
        await client.account.enableSudoMode({
          sudoPatch: {
            password: 'wrong-password-123',
          },
        });
        throw new Error('Should have thrown');
      } catch (error) {
        expectClientError(error);
      }
    });
  });

  describe('Account Deletion', () => {
    let account: Awaited<ReturnType<typeof createAccount>>;
    let client: SimpleLoginClient;

    beforeAll(async () => {
      account = await createAccount();
      if (!account) {
        throw new Error('Failed to create account');
      }

      client = new SimpleLoginClient({
        apiKey: account.loginResponse.apiKey,
        url: 'http://localhost:7777',
      });
    });

    test('rejects account deletion without sudo mode', async () => {
      try {
        await client.account.deleteUser();
        throw new Error('Should have thrown');
      } catch (error) {
        expectClientError(error);
      }
    });

    test('deletes user account in sudo mode', async () => {
      await client.account.enableSudoMode({
        sudoPatch: {
          password: account.password,
        },
      });

      const response = await client.account.deleteUserRaw();

      const result = await expectSuccess(response);
      expect(result).toBeDefined();
    });
  });

  describe('Authentication Flow', () => {
    test('registers a new account', async () => {
      const email = randEmail({
        nameSeparator: '.',
        provider: 'home',
        suffix: 'name',
      });
      const password = randPassword({ size: 8 });

      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      const response = await api.registerAccountRaw({
        authRegisterPost: {
          email,
          password,
        },
      });

      await expectSuccess(response);
    });

    test('activates account with valid code', async () => {
      const email = randEmail({
        nameSeparator: '.',
        provider: 'home',
        suffix: 'name',
      });
      const password = randPassword({ size: 8 });

      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      await api.registerAccount({
        authRegisterPost: {
          email,
          password,
        },
      });

      const code = await waitForSimpleLoginRegistrationCode(email);

      const response = await api.activateAccountRaw({
        authActivatePost: {
          email,
          code,
        },
      });

      await expectSuccess(response);
    });

    test('logs in with valid credentials', async () => {
      const email = randEmail({
        nameSeparator: '.',
        provider: 'home',
        suffix: 'name',
      });
      const password = randPassword({ size: 8 });
      const device = 'test-device';

      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      await api.registerAccount({
        authRegisterPost: {
          email,
          password,
        },
      });

      const code = await waitForSimpleLoginRegistrationCode(email);

      await api.activateAccount({
        authActivatePost: {
          email,
          code,
        },
      });

      const response = await api.loginRaw({
        authLoginPost: {
          email,
          password,
          device,
        },
      });

      const loginResult = await expectSuccess(response);
      expect(loginResult).toEqual(
        expect.objectContaining({
          apiKey: expect.any(String),
        })
      );
      expect(loginResult.apiKey.length).toBeGreaterThan(0);
    });

    test('reactivates account', async () => {
      const email = randEmail({
        nameSeparator: '.',
        provider: 'home',
        suffix: 'name',
      });
      const password = randPassword({ size: 8 });

      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      await api.registerAccount({
        authRegisterPost: {
          email,
          password,
        },
      });

      // Wait for first activation code
      await waitForSimpleLoginRegistrationCode(email);

      // Request reactivation
      const response = await api.reactivateAccountRaw({
        authReactivatePost: {
          email,
        },
      });

      await expectSuccess(response);
    });

    test('requests password reset', async () => {
      const email = randEmail({
        nameSeparator: '.',
        provider: 'home',
        suffix: 'name',
      });
      const password = randPassword({ size: 8 });

      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      await api.registerAccount({
        authRegisterPost: {
          email,
          password,
        },
      });

      const code = await waitForSimpleLoginRegistrationCode(email);

      await api.activateAccount({
        authActivatePost: {
          email,
          code,
        },
      });

      const response = await api.forgotPasswordRaw({
        authForgotPasswordPost: {
          email,
        },
      });

      await expectSuccess(response);
    });
  });

  describe('Error Handling', () => {
    test('returns 401 for invalid api key', async () => {
      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
          apiKey: 'invalid-key',
        })
      );

      try {
        await api.getUserInfo();
        throw new Error('Should have thrown');
      } catch (error) {
        expectError(error, 401);
      }
    });

    test('returns 401 for missing api key', async () => {
      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      try {
        await api.getUserInfo();
        throw new Error('Should have thrown');
      } catch (error) {
        expectError(error, 401);
      }
    });

    test.each([
      { email: '', password: 'valid123', description: 'empty email' },
      { email: 'invalid', password: 'valid123', description: 'malformed email' },
      { email: 'test@example.com', password: '', description: 'empty password' },
    ])('rejects registration with $description', async ({ email, password }) => {
      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      try {
        await api.registerAccount({
          authRegisterPost: { email, password },
        });
        throw new Error('Should have thrown');
      } catch (error) {
        expectClientError(error);
      }
    });

    test.each([
      { email: '', password: 'valid123', device: 'test', description: 'empty email' },
      { email: 'test@example.com', password: '', device: 'test', description: 'empty password' },
      {
        email: 'nonexistent@example.com',
        password: 'wrong123',
        device: 'test',
        description: 'invalid credentials',
      },
    ])('rejects login with $description', async ({ email, password, device }) => {
      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      try {
        await api.login({
          authLoginPost: { email, password, device },
        });
        throw new Error('Should have thrown');
      } catch (error) {
        expectClientError(error);
      }
    });

    test('rejects activation with invalid code', async () => {
      const email = randEmail({
        nameSeparator: '.',
        provider: 'home',
        suffix: 'name',
      });
      const password = randPassword({ size: 8 });

      const api = new AccountApi(
        new Configuration({
          basePath: 'http://localhost:7777/api',
        })
      );

      try {
        await api.registerAccount({
          authRegisterPost: {
            email,
            password,
          },
        });

        await api.activateAccount({
          authActivatePost: {
            email,
            code: 'invalid-code-123',
          },
        });
        throw new Error('Should have thrown');
      } catch (error) {
        expectClientError(error);
      }
    });
  });
});
