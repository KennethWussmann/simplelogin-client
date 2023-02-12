import { join } from 'path';

export const srcDir = join(process.cwd(), 'src');
export const buildDir = join(process.cwd(), 'build');
export const tscBuildDir = join(process.cwd(), 'tscBuild');
export const distDir = join(process.cwd(), 'dist');
export const sdkDestination = join(srcDir, 'sdk');
export const distOpenApiDir = join(distDir, 'openapi');
export const distRedocDir = join(distDir, 'redoc');
export const distTypedocDir = join(distDir, 'typedoc');

export const image = `ghcr.io/kennethwussmann/custom-swagger-codegen-cli-${
  process.arch === 'arm64' ? 'arm64' : 'amd64'
}:latest`;
