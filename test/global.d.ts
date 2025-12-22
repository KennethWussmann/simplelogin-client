import type { TestAPI } from 'vitest';
import type { SimpleLoginClient } from '../src/simpleLoginClient';
import type { UserInfo } from '../src/sdk/models/UserInfo';

declare global {
  const api: TestAPI<{
    client: SimpleLoginClient;
    user: UserInfo;
    password: string;
    email: string;
  }>;
}
