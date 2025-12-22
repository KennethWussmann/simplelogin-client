import { randEmail, randPassword } from '@ngneat/falso';
import { AccountApi, Configuration, ResponseError } from '../../src';
import { waitForSimpleLoginRegistrationCode } from './mailHog';

export const createAccount = async () => {
  const device = 'automated-api-tests';
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
    console.log(`Account ${email} created`);

    const code = await waitForSimpleLoginRegistrationCode(email);

    await api.activateAccount({
      authActivatePost: {
        email,
        code,
      },
    });
    console.log(`Account ${email} activated`);

    // Login to get API key for authentication
    const loginResponse = await api.login({
      authLoginPost: {
        email,
        password,
        device,
      },
    });
    console.log(`Account ${email} logged in`);
    return { loginResponse, password, email };
  } catch (e: unknown) {
    if (e instanceof ResponseError) {
      console.log(`Failed to create account ${email}`, e.response, await e.response.text());
    } else {
      throw e;
    }
  }
  throw new Error('Failed to register account');
};
