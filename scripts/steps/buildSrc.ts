import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export const buildSrc = async () => {
  console.log(sectionHeader('⚙️ Building source'));
  await $`tsc --project tsconfig.build.json`;
};
