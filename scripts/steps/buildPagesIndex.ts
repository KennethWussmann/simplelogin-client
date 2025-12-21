import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { distDir } from '../constants';
import { pagesIndexHtml } from './templates/pagesIndex';

export const buildPagesIndex = async () =>
  Promise.all([
    writeFile(join(distDir, 'index.html'), pagesIndexHtml, 'utf-8'),
    writeFile(join(distDir, '.nojekyll'), '', 'utf-8'),
  ]);
