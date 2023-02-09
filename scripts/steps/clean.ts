import { createDirectoryIfNotExists, deleteIfExists, sectionHeader } from '../utils';
import { buildDir, distDir, distOpenApiDir, distRedocDir, distTypedocDir, sdkDestination } from '../constants';

const logIfTrue = async (value: Promise<boolean>, message: string) => {
  if (await value) {
    console.log(message);
  }
};

const deleteAndLog = async (path: string) => logIfTrue(deleteIfExists(path), `Deleted ${path}`);
const mkdirAndLog = async (path: string) => logIfTrue(createDirectoryIfNotExists(path), `Created directory ${path}`);

export const clean = async () => {
  console.log(sectionHeader('🚮 Cleaning up'));
  await Promise.all([buildDir, sdkDestination, distDir].map(deleteAndLog));
  await createDirs();
};

export const createDirs = async () =>
  Promise.all([buildDir, sdkDestination, distDir, distRedocDir, distTypedocDir, distOpenApiDir].map(mkdirAndLog));
