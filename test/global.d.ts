import type { TestAPI } from 'vitest';
import type { UserInfo } from '../src/sdk/models/UserInfo';
import type { SimpleLoginClient } from '../src/simpleLoginClient';

declare global {
  const api: TestAPI<{
    client: SimpleLoginClient;
    user: UserInfo;
    password: string;
    email: string;
  }>;
}
