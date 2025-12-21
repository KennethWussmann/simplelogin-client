<div align="center">
  <h1><code>simplelogin-client</code></h1>
  <p>
    <strong>Zero-dependency TypeScript client for the <a href="https://simplelogin.io">SimpleLogin.io</a> API. Compatible with NodeJS and browsers.</strong>
  </p>
  <p>
    <a href="https://kennethwussmann.github.io/simplelogin-client/typedoc/index.html">Documentation</a> • <a href="https://kennethwussmann.github.io/simplelogin-client/redoc/index.html">API Spec</a> • <a href="https://github.com/KennethWussmann/simplelogin-cli">CLI Tool</a>
  </p>
</div>

> [!TIP]
> No time to code? Check out the [CLI tool](https://github.com/KennethWussmann/simplelogin-cli) based on this client SDK to get started quickly!

## Features

> Interested in the state of the project? [Check the faq!](./docs/faq.md#whats-the-current-project-state)

- [x] Account Management
  - [x] Login (+MFA), Register, Activate, Reactivate
  - [x] Password reset
  - [x] User info and statistics
  - [x] API key management
  - [x] Cookie token generation
  - [x] Logout
  - [x] Sudo mode
  - [x] Account deletion
- [x] Alias Management
  - [x] Get alias options
  - [x] Create (random and custom), Update, Delete
  - [x] Contacts and activities
- [x] Mailbox Management
  - [x] Get, Create, Update, Delete
- [x] Contact Management
  - [x] Get, Create
  - [x] Delete
  - [x] Block & unblock
- [x] Settings
  - [x] Read and write settings
  - [x] Read random alias domains
- [ ] [Custom Domain Management](https://github.com/KennethWussmann/simplelogin-client/issues/7)
  - [x] Get domains
  - [ ] Update domain settings
  - [ ] View trash (deleted aliases)
- [ ] [Notifications](https://github.com/KennethWussmann/simplelogin-client/issues/9)
  - [ ] Get notifications
  - [ ] Mark notification as read
- [ ] [Import & Export](https://github.com/KennethWussmann/simplelogin-client/issues/11)
  - [ ] Export complete user data
  - [ ] Export aliases as CSV
- [ ] [Phone & Misc](https://github.com/KennethWussmann/simplelogin-client/issues/12)
  - [ ] Phone reservation message retrieval
  - [ ] Apple payment processing

## Getting started

`simplelogin-client` works in most NodeJS versions and browsers, but may require a tweak when not used with NodeJS 18 or in outdated browsers. Check the [compatibility guide](./docs/faq.md#what-nodejs-version-and-browsers-are-supported).

To start using this API client in your JS/TS projects:

```shell
# Install dependency
npm install --save simplelogin-client
```

```typescript
import { AliasApi, SimpleLoginConfig } from 'simplelogin-client';

const alias = new AliasApi(
  new SimpleLoginConfig({
    apiKey: process.env.API_KEY,
  }),
);

const createdAlias = await alias.createRandomAlias({
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

> :bangbang: Please don't contact the SimpleLogin team with issues regarding this client. Instead open an issue in this repository.

## Development

Want to contribute fixes to the API client or spec? Check the [development guide](./docs/development.md)!
