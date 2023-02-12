<div align="center">
  <h1><code>simplelogin-client</code></h1>
  <p>
    <strong>Zero-dependency TypeScript client for the <a href="https://simplelogin.io">SimpleLogin.io</a> API. Compatible with NodeJS and browsers.</strong>
  </p>
  <p>
    <a href="https://kennethwussmann.github.io/simplelogin-client/typedoc/index.html">Documentation</a> • <a href="https://kennethwussmann.github.io/simplelogin-client/redoc/index.html">API Spec</a> 
  </p>
</div>

## Features

> Interested in the state of the project? [Check the faq!](./docs/faq.md#whats-the-current-project-state)

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
- [ ] Settings
- [ ] Import & Export
- [ ] Misc
- [ ] Phone

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

## Development

Want to contribute fixes to the API client or spec? Check the [development guide](./docs/development.md)!
