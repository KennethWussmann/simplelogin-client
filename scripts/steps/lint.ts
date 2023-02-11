import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export const lint = async () => {
  console.log(sectionHeader('🔍 Linting'));
  await $`prettier . --check`;
  await $`eslint \"src/**/*.{ts,tsx}\" --ext .ts`;
};
