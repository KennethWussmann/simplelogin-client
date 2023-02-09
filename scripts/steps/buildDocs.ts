import { join } from 'path';
import { $ } from 'zx/core';
import { distRedocDir } from '../constants';
import { deleteIfExists, sectionHeader } from '../utils';

export const buildDocs = async (oasPath: string) => {
  console.log(sectionHeader('📚 Building docs'));
  return Promise.all([
    $`npx typedoc`,
    $`npx redoc-cli build ${oasPath} -o ${join(distRedocDir, 'index.html')}`,
    deleteIfExists(join(distRedocDir, '.nojekyll')),
  ]);
};
