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

- [x] [Export](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/ImportExportApi.html)
  - [x] [Export complete user data](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/ImportExportApi.html#exportUserData)
  - [x] [Export aliases as CSV](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/ImportExportApi.html#exportAliasesAsCsv)
- [x] [Account Management](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html)
  - [x] [Login](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#login) ([+MFA](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#mfa)), [Register](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#registerAccount), [Activate](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#activateAccount), [Reactivate](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#reactivateAccount)
  - [x] [Password reset](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#forgotPassword)
  - [x] [User info](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#getUserInfo) and [statistics](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#getStats)
  - [x] [API key management](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#createApiKey)
  - [x] [Cookie token generation](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#getCookieToken)
  - [x] [Logout](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#logout)
  - [x] [Sudo mode](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#enableSudoMode)
  - [x] [Account deletion](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AccountApi.html#deleteUser)
- [x] [Alias Management](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html)
  - [x] [Get alias options](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#getAliasOptions)
  - [x] Create ([random](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#createRandomAlias) and [custom](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#createCustomAlias)), [Update](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#updateAlias), [Delete](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#deleteAlias)
  - [x] [Contacts](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#getContacts) and [activities](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#getActivities)
- [x] [Mailbox Management](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/MailboxApi.html)
  - [x] [Get](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/MailboxApi.html#getMailboxes), [Create](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/MailboxApi.html#createMailbox), [Update](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/MailboxApi.html#updateMailbox), [Delete](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/MailboxApi.html#deleteMailbox)
- [x] [Contact Management](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html)
  - [x] [Get](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#getContacts), [Create](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#createContact)
  - [x] [Delete](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#deleteContact)
  - [x] [Block & unblock](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/AliasApi.html#toggleContactBlocking)
- [x] [Settings](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/SettingsApi.html)
  - [x] [Read](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/SettingsApi.html#getUserSettings) and [write settings](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/SettingsApi.html#updateUserSettings)
  - [x] [Read random alias domains](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/SettingsApi.html#getAvailableDomainsForRandomAliases)
- [x] [Custom Domain Management](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/CustomDomainApi.html)
  - [x] [Get domains](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/CustomDomainApi.html#getCustomDomains)
  - [x] [Update domain settings](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/CustomDomainApi.html#updateCustomDomain)
  - [x] [View trash (deleted aliases)](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/CustomDomainApi.html#getDeletedAliases)
- [ ] [Notifications](https://github.com/KennethWussmann/simplelogin-client/issues/9)
  - [ ] Get notifications
  - [ ] Mark notification as read
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
