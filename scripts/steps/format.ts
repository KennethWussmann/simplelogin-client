import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export const format = async () => {
  console.log(sectionHeader('🧹 Formatting'));
  await $`prettier . --write`;
  await $`eslint \"src/**/*.{ts,tsx}\" --ext .ts --fix`;
};
