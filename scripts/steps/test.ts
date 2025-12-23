import { $ } from 'zx/core';
import { stepHeader } from '../utils';

export const test = async () => {
  console.log(stepHeader('Running tests'));

  await $`pnpm vitest`;
};
