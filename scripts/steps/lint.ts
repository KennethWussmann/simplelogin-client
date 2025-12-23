import { $ } from 'zx/core';
import { stepHeader } from '../utils';

export const lint = async () => {
  console.log(stepHeader('🔍 Linting'));
  await $`biome format .`;
  await $`biome check .`;
};
