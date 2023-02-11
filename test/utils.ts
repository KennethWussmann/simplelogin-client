import { SimpleLogin } from '../src';
import type { Response } from 'node-fetch';
import { config } from 'dotenv';

config();

const assertEnv = (env: string): string => {
  const envValue = process.env[env];
  if (!envValue) {
    throw new Error(`Missing environment variable ${env}`);
  }
  return envValue;
};

const serverUrl = assertEnv('SERVER_URL');
const apiKey = assertEnv('API_KEY');
export const accountApi = new SimpleLogin.AccountApi({ apiKey }, serverUrl);
export const aliasApi = new SimpleLogin.AliasApi({ apiKey }, serverUrl);
export const mailboxApi = new SimpleLogin.MailboxApi({ apiKey }, serverUrl);
export const customDomainApi = new SimpleLogin.CustomDomainApi({ apiKey }, serverUrl);

const isResponse = (error: unknown): error is Response => !!(error as Response).status;

export const toResponse = (error: unknown): Response => {
  if (!isResponse(error)) {
    throw error;
  }
  return error;
};

export const printUnexpectedResponse = async (error: unknown) => {
  const response = toResponse(error);

  throw new Error(
    [
      `Unexpected response:`,
      `  URL: ${response.url}`,
      `  Status: ${response.status} ${response.statusText}`,
      //`  Headers: ${JSON.stringify(Object.fromEntries(Array.from(response.headers.entries())), null, 4)}`,
      `  Body: ${await response.text()}`,
    ].join('\n'),
  );
};
