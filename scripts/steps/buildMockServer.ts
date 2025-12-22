import { join } from 'node:path';
import { $ } from 'zx/core';
import { simpleLoginVersion } from '../constants';
import { createDirectoryIfNotExists, deleteIfExists, sectionHeader } from '../utils';

const mockServerDir = join(process.cwd(), 'mock-server');
const buildDir = join(mockServerDir, 'build');
const downloadUrl = `https://github.com/simple-login/app/archive/refs/tags/${simpleLoginVersion}.zip`;

export const buildMockServer = async () => {
  console.log(sectionHeader('🐳 Building SimpleLogin Docker Image'));

  // Create build directory
  await createDirectoryIfNotExists(buildDir);

  const zipFile = join(buildDir, `${simpleLoginVersion}.zip`);
  const extractedDir = join(buildDir, `app-${simpleLoginVersion.replace('v', '')}`);

  // Download SimpleLogin app if not already downloaded
  console.log(`Downloading SimpleLogin ${simpleLoginVersion}...`);
  await $`curl -L ${downloadUrl} -o ${zipFile}`;

  // Clean up any existing extracted directory
  await deleteIfExists(extractedDir);

  // Extract the archive
  console.log('Extracting archive...');
  await $`unzip -q ${zipFile} -d ${buildDir}`;

  // Build the Docker image
  console.log('Building SimpleLogin image...');
  await $`docker build --tag simplelogin-app:${simpleLoginVersion} ${extractedDir}`;

  console.log('Built SimpleLogin successfully');

  console.log(sectionHeader('🐳 Building Mock Server'));

  // Build the mock server wrapper image
  console.log('Building mock server image...');
  await $`docker build --build-arg SIMPLELOGIN_VERSION=${simpleLoginVersion} --tag simplelogin-mock:latest ${mockServerDir}`;

  console.log('Built Mock Server successfully');
};
