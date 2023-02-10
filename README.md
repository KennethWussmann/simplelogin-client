<div align="center">
  <h1><code>simplelogin-client</code></h1>
  <p>
    <strong>Zero-dependency TypeScript client for the <a href="https://simplelogin.io">SimpleLogin.io</a> API. Compatible with NodeJS 18+ and browsers.</strong>
  </p>
  <p>
    <a href="https://kennethwussmann.github.io/simplelogin-client/typedoc/index.html">Documentation</a> • <a href="https://kennethwussmann.github.io/simplelogin-client/redoc/index.html">API Spec</a> 
  </p>
</div>

## Features

The client is still in development. Below is a list of supported features.
During the v0.\* versions of this client, you may expect breaking changes to the client.

- [x] Account Management
  - [x] Login (+MFA), Register, Activate, etc.
  - [x] User info
  - [x] API key management
- [x] Alias Management
  - [x] Get, Create, Update, Delete
  - [x] Contacts and activities
- [x] Mailbox Management
  - [x] Get, Create, Update, Delete
- [ ] Custom Domain Management
  - [x] Get
  - [ ] Update, Delete
- [ ] Contact Management
  - [x] Get, Create
  - [ ] Delete
  - [ ] Block & unblock
- [ ] Notifications
  - [ ] Get
  - [ ] Mark as read
- [ ] Settings
  - [ ] Get, update
  - [ ] Get usable domains
- [ ] Import & Export
  - [ ] Export user data
  - [ ] Export aliases CSV
- [ ] Misc
  - [ ] Process Apple receipt
- [ ] Phone
  - [ ] Get messages received during reservation

## Getting started

To start using this API client in your JS/TS projects:

```shell
# Install dependency
npm install --save simplelogin-client
```

```typescript
import { SimpleLogin } from 'simplelogin-client';

const alias = new SimpleLogin.AliasApi({
  apiKey: process.env.API_KEY,
});

const createdAlias = await alias.createRandom({
  note: 'This alias was created with simplelogin-client!',
});

console.log(createdAlias);
/* Output:
{
  id: 50001,
  creation_date: '2023-02-10 20:19:37+00:00',
  alias: 'nederlanden_heatherington@example.com',
  mailbox: { email: 'somewhere@gmail.com', id: 50001 },
  enabled: true,
  pinned: false,
  note: "This alias was created with simplelogin-client!",
  ...
}
*/
```

Check the [documentation](https://kennethwussmann.github.io/simplelogin-client/typedoc/index.html) for all available methods and the [FAQ](./docs/faq.md) in case of questions.

## Development

It's basically writing OpenAPI spec, to contribute code to this client.

The client is generated using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) and the OpenAPI spec is written with [boats](https://github.com/j-d-carmichael/boats).

Everything in `./dist` & `./src/sdk` is generated and should not be modified manually. To adjust the API client, docs or the built OpenAPI spec, adjust the YAML files in `./oas` to document the API. Check the [boats documentation](https://j-d-carmichael.github.io/boats/#/) and the [OpenAPI v3 spec](https://swagger.io/specification/) for further guidance.

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

### Build process

The build process is configured in `scripts/build.ts` and `scripts/rebuild.ts`. These scripts combine all the different CLI tools for the build process and ensures everthing fits together. They also modify some generated files to make them compatible.

### Contribute

PRs are highly welcome. Remember to run the build and commit the generated files.
