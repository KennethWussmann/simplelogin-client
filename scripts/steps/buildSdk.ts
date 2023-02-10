import { globby } from 'globby';
import { join, parse } from 'path';
import { $ } from 'zx/core';
import { image, sdkDestination } from '../constants';
import { save, read, sectionHeader } from '../utils';

const getDestinationPath = (path: string) => {
  const filename = parse(path).base;
  return join(sdkDestination, filename);
};

const modify = (filename: string, content: string) =>
  [
    ...(filename.toLowerCase().includes('api.') ? ['/* eslint-disable */', '// @ts-nocheck'] : []),
    ...content
      .replace(
        'import * as isomorphicFetch from "isomorphic-fetch";\n',
        'const defaultFetchApi = fetch;\nexport type Response = any;\n',
      )
      .replace("declare module 'isomorphic-fetch';\n", '')
      .replace('/// <reference path="./custom.d.ts" />\n', '')
      .replace('// tslint:disable\n', '')
      .split('\n')
      .map((line) => line.replace('isomorphicFetch', 'defaultFetchApi')),
  ].join('\n');

const moveSdkFiles = async () => {
  const paths = await globby(['build/sdk/*.ts', '!build/sdk/*.spec.ts', '!build/sdk/*.d.ts']);

  await Promise.all(
    paths.map(async (path) => {
      const destination = getDestinationPath(path);
      const originalFileContent = await read(path);
      const modifiedFileContent = modify(parse(path).base, originalFileContent);

      await save(destination, modifiedFileContent);
      console.log(`Moved modified ${path} to ${destination}`);
    }),
  );
};

export const buildSdk = async (oasPath: string) => {
  console.log(sectionHeader('🔧 Building SDK'));
  await $`docker pull ${image}`;
  await $`docker run --rm -v ${process.cwd()}:/local ${image} generate -i ${join(
    '/local',
    'dist',
    'openapi',
    parse(oasPath).base,
  )} -l typescript-fetch -o /local/build/sdk`;
  await moveSdkFiles();
};
