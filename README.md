<div align="center">
  <h1><code>simplelogin-client</code></h1>
  <p>
    <strong>Zero-dependency TypeScript client for the SimpleLogin.io API. Compatible with NodeJS 18+ and browsers.</strong>
  </p>
  <p>
    <a href="">Documentation</a> • <a href="">API Spec</a> 
  </p>
</div>

## Getting started

To start using this API client in your JS/TS projects:

```shell
# Install dependency
npm install --save simplelogin-client
```

```typescript
import { SimpleLogin } from 'simplelogin-client';

// TODO: Add usage example
```

## Development

It's basically writing OpenAPI spec, to contribute code to this client.

The client is generated using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) and the OpenAPI spec is written with [boats](https://github.com/j-d-carmichael/boats).

Everything in `./dist` & `./src/sdk` is generated and should not be editied manually. To adjust the API client, docs or the built OpenAPI spec, adjust the YAML files in `./oas` to document the API.

### Setup

> Requires Docker & NodeJS 18+

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

### Note on arm64 machines

Building on `arm64` architecture is currently not possible, because the official [swagger-codegen-cli docker image](https://hub.docker.com/r/swaggerapi/swagger-codegen-cli) is not available for this architecture. I'll try to publish one soon.
