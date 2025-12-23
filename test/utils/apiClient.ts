import { type AuthLogin, SimpleLoginClient } from '../../src';
import { DEFAULT_API_CLIENT_CONFIG } from '../setup';
import { createAccount } from './createAccount';

type AccountCache = {
  loginResponse: AuthLogin;
  email: string;
  password: string;
};

let account: AccountCache | undefined;
let client: SimpleLoginClient | undefined;

export const getAuthenticatedClient = async () => {
  if (client && account) {
    return { client, account };
  }

  const newAccount = await createAccount();

  if (!newAccount) {
    throw new Error('Failed to create test account');
  }

  account = newAccount;
  client = new SimpleLoginClient({
    ...DEFAULT_API_CLIENT_CONFIG,
    apiKey: account.loginResponse.apiKey,
  });

  return { client, account };
};
