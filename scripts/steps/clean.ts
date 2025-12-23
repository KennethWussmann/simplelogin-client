import {
  buildDir,
  distDir,
  distOpenApiDir,
  distRedocDir,
  distTypedocDir,
  mockServerBuildDir,
  sdkDestination,
  tscBuildDir,
} from '../constants';
import { createDirectoryIfNotExists, deleteIfExists, stepHeader } from '../utils';

const logIfTrue = async (value: Promise<boolean>, message: string) => {
  if (await value) {
    console.log(message);
  }
};

const deleteAndLog = async (path: string) => logIfTrue(deleteIfExists(path), `Deleted ${path}`);
const mkdirAndLog = async (path: string) =>
  logIfTrue(createDirectoryIfNotExists(path), `Created directory ${path}`);

export const clean = async (dirs = [buildDir, tscBuildDir, sdkDestination, distDir]) => {
  console.log(stepHeader('🚮 Cleaning up'));
  await Promise.all(dirs.map(deleteAndLog));
  await createDirs();
};

export const createDirs = async () =>
  Promise.all(
    [
      buildDir,
      tscBuildDir,
      sdkDestination,
      distDir,
      distRedocDir,
      distTypedocDir,
      distOpenApiDir,
      mockServerBuildDir,
    ].map(mkdirAndLog)
  );
