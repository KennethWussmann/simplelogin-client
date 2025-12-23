import { join } from 'node:path';

export const srcDir = join(process.cwd(), 'src');
export const buildDir = join(process.cwd(), 'build');
export const tscBuildDir = join(process.cwd(), 'tscBuild');
export const distDir = join(process.cwd(), 'dist');
export const mockServerDir = join(process.cwd(), 'mock-server');
export const sdkDestination = join(srcDir, 'sdk');
export const distOpenApiDir = join(distDir, 'openapi');
export const distRedocDir = join(distDir, 'redoc');
export const distTypedocDir = join(distDir, 'typedoc');
export const mockServerBuildDir = join(mockServerDir, 'build');

export const image = 'openapitools/openapi-generator-cli:v7.17.0';
// The version of SimpleLogin we run our API tests against
export const mockServerSimpleLoginVersion = 'v4.74.6';
