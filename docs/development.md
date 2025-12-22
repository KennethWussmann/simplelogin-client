# Development

It's basically writing OpenAPI spec, to contribute code to this client.

The client is generated using [openapi-generator](https://openapi-generator.tech) and the OpenAPI spec is written with [boats](https://github.com/j-d-carmichael/boats).

Everything in `./dist` & `./src/sdk` is generated and should not be modified manually. To adjust the API client, docs or the built OpenAPI spec, adjust the YAML files in `./oas` to document the API. Check the [boats documentation](https://j-d-carmichael.github.io/boats/#/) and the [OpenAPI v3 spec](https://swagger.io/specification/) for further guidance.

## Setup

> Requires Docker & NodeJS 24+

```shell
# Install dependencies
pnpm install

# Start build of ./dist & ./src/sdk
pnpm build

# During development the build can run when a source file was changed using
pnpm dev
```

## Build process

The build process is configured in `scripts/build.ts` and `scripts/rebuild.ts`. These scripts combine all the different CLI tools for the build process and ensures everthing fits together. They also modify some generated files to make them compatible.

## Testing

All tests are running against a local SimpleLogin installation built by `./mock-server`.

Tests are run in parallel and every test gets their own user account, automatically created by the `api()` test case.

```shell
# Start the test environment
cd mock-server/
docker-compose up -d
```

## Contribute

PRs are highly welcome. Remember to run the build and commit the generated files.
