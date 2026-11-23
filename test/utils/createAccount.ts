import { randomUUID } from 'node:crypto';
import { randEmail, randPassword } from '@ngneat/falso';
import { AccountApi, Configuration, ResponseError } from '../../src';
import { waitForSimpleLoginRegistrationCode } from './mailHog';

const maxAttempts = 5;

const createRandomEmail = () => {
  const email = randEmail({
    nameSeparator: '.',
    provider: 'home',
    suffix: 'name',
  });
  const [local, domain] = email.split('@');
  return `${local}.${randomUUID().slice(0, 8)}@${domain}`;
};

export const createAccount = async () => {
  const device = 'automated-api-tests';
  const password = randPassword({ size: 8 });

  const api = new AccountApi(
    new Configuration({
      basePath: 'http://localhost:7777/api',
    })
  );

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const email = createRandomEmail();

    try {
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

      // Login to get API key for authentication
      const loginResponse = await api.login({
        authLoginPost: {
          email,
          password,
          device,
        },
      });
      return { loginResponse, password, email };
    } catch (e: unknown) {
      if (e instanceof ResponseError) {
        console.log(`Failed to create account ${email}`, e.response, await e.response.text());
        continue;
      }
      throw e;
    }
  }

  throw new Error('Failed to register account');
};
