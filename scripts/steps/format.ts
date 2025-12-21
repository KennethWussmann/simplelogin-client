import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export const format = async () => {
  console.log(sectionHeader('🧹 Formatting'));
  await $`biome check . --write --unsafe`;
};
