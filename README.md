# simplelogin-client

Zero-dependency TypeScript client for the SimpleLogin.io API. Compatible with NodeJS 18+ and browsers.

## Development

It's basically just writing OpenAPI spec.

The client is generated using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) and the OpenAPI spec is written with [boats](https://github.com/j-d-carmichael/boats).

Everything in `./dist` & `./src/sdk` is generated and should not be editied manually. To adjust the API client, docs or the built OpenAPI spec, adjust the YAML files in `./oas` to document the API.

### Setup

> Requires NodeJS 18+

```shell
# Install dependencies
npm install

# Start build of ./dist & ./src/sdk
npm run build

# During development the build can run when a source file was changed using
npm run watch
```

### Contribute

PRs are highly welcome. Remember to run the build and commit the generated files.
