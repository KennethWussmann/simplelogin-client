import { $ } from 'zx/core';
import { stepHeader } from '../utils';

export const format = async () => {
  console.log(stepHeader('🧹 Formatting'));
  await $`biome check . --write --unsafe`;
};
