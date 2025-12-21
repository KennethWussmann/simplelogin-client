import { $ } from 'zx/core';
import { sectionHeader } from '../utils';

export default async () => {
  console.log(sectionHeader('🔃 Updating Dependencies'));
  await $`pnpm npm-check-updates -u --filterVersion \"/^[~^<>]| - |\\.x$/\" --deep`;
  await $`pnpm install --no-frozen-lockfile`;
};
