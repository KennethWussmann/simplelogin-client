import { mockServerClient } from 'mockserver-client';
import { join } from 'path';
import { SimpleLogin } from '../src';

export const mockServerPort = 1080;
export const mockServerUrl = `http://localhost:${mockServerPort}/api`;
export const mockClient = mockServerClient('localhost', mockServerPort);
export const specUrlOrPayload = join(process.cwd(), 'dist', 'openapi', 'simplelogin.yml');

export const accountApi = new SimpleLogin.AccountApi(undefined, mockServerUrl);
export const aliasApi = new SimpleLogin.AliasApi(undefined, mockServerUrl);
export const mailboxApi = new SimpleLogin.MailboxApi(undefined, mockServerUrl);
export const customDomainApi = new SimpleLogin.CustomDomainApi(undefined, mockServerUrl);

export const expectOperation = async (operationId: string) => {
  await mockClient.verify({
    specUrlOrPayload,
    operationId,
  });
};
