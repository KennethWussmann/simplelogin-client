import type { TestAPI } from 'vitest';
import type { SimpleLoginClient } from '../src/simpleLoginClient';

declare global {
  const api: TestAPI<{ client: SimpleLoginClient }>;
}
