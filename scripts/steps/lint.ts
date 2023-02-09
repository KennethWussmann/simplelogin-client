import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export const lint = async () => {
  console.log(sectionHeader('🧹 Formatting'));
  await $`npm run format`;
  await $`npm run lint:fix`;
};
