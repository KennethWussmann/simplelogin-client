import { join, parse } from 'path';
import { $ } from 'zx/core';
import { glob } from 'zx';
import { image, sdkDestination } from '../constants';
import { save, read, sectionHeader, createDirectoryIfNotExists } from '../utils';

const getDestinationPath = (path: string) => {
  const filename = parse(path).base;
  return join(sdkDestination, path.replace('build/sdk/', '').replace(filename, ''), filename);
};

const modify = (filename: string, content: string) =>
  filename === 'index.ts'
    ? content
    : [
        '/* eslint-disable */',
        '// @ts-nocheck',
        'type RequestCredentials = any;',
        'type Response = any;',
        'type RequestInit = any;',
        'type FormData = any;',
        'type WindowOrWorkerGlobalScope = any;',
        content,
      ].join('\n');

const moveSdkFiles = async () => {
  const paths = await glob(['build/sdk/**/*.ts']);

  await Promise.all(
    paths.map(async (path) => {
      const destination = getDestinationPath(path);
      await createDirectoryIfNotExists(parse(destination).dir);
      const originalFileContent = await read(path);
      const modifiedFileContent = modify(parse(path).base, originalFileContent);

      await save(destination, modifiedFileContent);
      console.log(`Copied modified ${path} to ${destination}`);
    }),
  );
};

export const buildSdk = async (oasPath: string) => {
  console.log(sectionHeader('🔧 Building SDK'));
  await $`docker run --rm -v ${process.cwd()}:/local ${image} generate -i ${join(
    '/local',
    'dist',
    'openapi',
    parse(oasPath).base,
  )} -g typescript-fetch -o /local/build/sdk`;
  await moveSdkFiles();
};
