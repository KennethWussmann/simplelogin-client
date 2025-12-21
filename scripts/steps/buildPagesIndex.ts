import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { distDir } from '../constants';
import { getCommitHash, getPackageVersion } from '../utils';
import { pagesIndexHtml } from './templates/pagesIndex';

export const buildPagesIndex = async () => {
  const version = await getPackageVersion();
  const commit = getCommitHash();

  return Promise.all([
    writeFile(join(distDir, 'index.html'), pagesIndexHtml(version, commit), 'utf-8'),
    writeFile(join(distDir, '.nojekyll'), '', 'utf-8'),
  ]);
};
