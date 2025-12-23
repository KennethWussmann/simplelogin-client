import { join } from 'node:path';
import { $ } from 'zx/core';
import { mockServerSimpleLoginVersion } from '../constants';
import { createDirectoryIfNotExists, deleteIfExists, stepHeader } from '../utils';

const mockServerDir = join(process.cwd(), 'mock-server');
const buildDir = join(mockServerDir, 'build');
const downloadUrl = `https://github.com/simple-login/app/archive/refs/tags/${mockServerSimpleLoginVersion}.zip`;

export const buildMockServer = async () => {
  console.log(stepHeader('🐳 Building SimpleLogin Docker Image'));

  // Create build directory
  await createDirectoryIfNotExists(buildDir);

  const zipFile = join(buildDir, `${mockServerSimpleLoginVersion}.zip`);
  const extractedDir = join(buildDir, `app-${mockServerSimpleLoginVersion.replace('v', '')}`);

  // Download SimpleLogin app if not already downloaded
  console.log(`Downloading SimpleLogin ${mockServerSimpleLoginVersion}...`);
  await $`curl -L ${downloadUrl} -o ${zipFile}`;

  // Clean up any existing extracted directory
  await deleteIfExists(extractedDir);

  // Extract the archive
  console.log('Extracting archive...');
  await $`unzip -q ${zipFile} -d ${buildDir}`;

  // Build the Docker image
  console.log('Building SimpleLogin image...');
  await $`docker build --tag simplelogin-app:${mockServerSimpleLoginVersion} ${extractedDir}`;

  console.log('Built SimpleLogin successfully');

  console.log(stepHeader('🐳 Building Mock Server'));

  // Build the mock server wrapper image
  console.log('Building mock server image...');
  await $`docker build --build-arg SIMPLELOGIN_VERSION=${mockServerSimpleLoginVersion} --tag simplelogin-mock:latest ${mockServerDir}`;

  console.log('Built Mock Server successfully');
};
