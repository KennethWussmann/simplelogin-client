import {
  buildDir,
  distDir,
  distOpenApiDir,
  distRedocDir,
  distTypedocDir,
  sdkDestination,
  tscBuildDir,
} from "../constants";
import { createDirectoryIfNotExists, deleteIfExists, sectionHeader } from "../utils";

const logIfTrue = async (value: Promise<boolean>, message: string) => {
  if (await value) {
    console.log(message);
  }
};

const deleteAndLog = async (path: string) => logIfTrue(deleteIfExists(path), `Deleted ${path}`);
const mkdirAndLog = async (path: string) => logIfTrue(createDirectoryIfNotExists(path), `Created directory ${path}`);

export const clean = async () => {
  console.log(sectionHeader("🚮 Cleaning up"));
  await Promise.all([buildDir, tscBuildDir, sdkDestination, distDir].map(deleteAndLog));
  await createDirs();
};

export const createDirs = async () =>
  Promise.all(
    [buildDir, tscBuildDir, sdkDestination, distDir, distRedocDir, distTypedocDir, distOpenApiDir].map(mkdirAndLog),
  );
