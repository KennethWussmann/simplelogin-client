import { config } from "dotenv";
import type { Response } from "node-fetch";
import { AccountApi, AliasApi, CustomDomainApi, MailboxApi, SimpleLoginConfig } from "../src";

config();

const assertEnv = (env: string): string => {
  const envValue = process.env[env];
  if (!envValue) {
    throw new Error(`Missing environment variable ${env}`);
  }
  return envValue;
};

const serverUrl = assertEnv("SERVER_URL");
const apiKey = assertEnv("API_KEY");
const apiConfig = new SimpleLoginConfig({ apiKey, basePath: serverUrl });
export const accountApi = new AccountApi(apiConfig);
export const aliasApi = new AliasApi(apiConfig);
export const mailboxApi = new MailboxApi(apiConfig);
export const customDomainApi = new CustomDomainApi(apiConfig);

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
      "Unexpected response:",
      `  URL: ${response.url}`,
      `  Status: ${response.status} ${response.statusText}`,
      //`  Headers: ${JSON.stringify(Object.fromEntries(Array.from(response.headers.entries())), null, 4)}`,
      `  Body: ${await response.text()}`,
    ].join("\n"),
  );
};
