import { join } from 'node:path';
import { $ } from 'zx/core';
import { distRedocDir } from '../constants';
import { deleteIfExists, sectionHeader } from '../utils';

export const buildDocs = async (oasPath: string) => {
  console.log(sectionHeader('📚 Building docs'));
  return Promise.all([
    $`npx typedoc`,
    $`npx @redocly/cli build-docs ${oasPath} -o ${join(distRedocDir, 'index.html')}`,
    deleteIfExists(join(distRedocDir, '.nojekyll')),
  ]);
};
