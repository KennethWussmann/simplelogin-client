import { randEmail, randPassword } from '@ngneat/falso';
import { AccountApi, Configuration, ResponseError } from '../../src';
import { waitForSimpleLoginRegistrationCode } from './mailHog';

export const createAccount = async () => {
  const email = randEmail();
  const password = randPassword({ size: 8 });

  const api = new AccountApi(
    new Configuration({
      username: email,
      password,
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

    const apiKey = await api.createApiKey({
      userApiKeyPost: {
        device: 'automated-api-tests',
      },
    });

    console.log('API key created', apiKey);
  } catch (e: unknown) {
    if (e instanceof ResponseError) {
      console.log(`Failed to create account ${email}`, e.response, await e.response.text());
    } else {
      throw e;
    }
  }
};

void createAccount();
