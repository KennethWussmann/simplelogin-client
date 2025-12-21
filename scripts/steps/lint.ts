import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export const lint = async () => {
  console.log(sectionHeader('🔍 Linting'));
  await $`biome format .`;
  await $`biome check .`;
};
