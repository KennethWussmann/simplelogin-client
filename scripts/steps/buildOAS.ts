import { globby } from 'globby';
import { join } from 'path';
import { $ } from 'zx/core';
import { distOpenApiDir } from '../constants';
import { sectionHeader } from '../utils';

export const buildOAS = async () => {
  console.log(sectionHeader('📄 Building OpenAPI Spec'));
  await Promise.all([
    $`boats -i ./oas/index.yml -o ${join('dist', 'openapi', 'simplelogin.json')}`,
    $`boats -i ./oas/index.yml -o ${join('dist', 'openapi', 'simplelogin.yml')}`,
  ]);

  return (await globby([join(distOpenApiDir, 'simplelogin_*.json')]))[0];
};
