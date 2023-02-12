# FAQ

## Can the client be used for selfhosted installations of SimpleLogin?

Yes, the used API url can be adjusted when constructing the client:

```typescript
import { AliasApi, SimpleLoginConfig } from 'simplelogin-client';

const alias = new AliasApi(
  new SimpleLoginConfig({
    apiKey: process.env.API_KEY,
    basePath: 'https://app.my-selfhosted-simplelogin.io/api', // <-- change me
  }),
);
```

> Check the [docs](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/SimpleLogin.BaseAPI.html#constructor) for more information.

## What NodeJS version and browsers are supported?

This client is developed for NodeJS 18 and modern browsers.
It can run in most NodeJS versions and most browsers as well with a third-party `fetch` API.

It does not require any dependencies by default when used in enviroments where a global `fetch` API is available. This is the case for NodeJS 18 and modern browsers.

In case you want to use the client with older versions of NodeJS you may need to install a third-party `fetch` compliant library like [`node-fetch`](https://www.npmjs.com/package/node-fetch). You then just pass the `fetch` HTTP client into the API client:

```typescript
import { AliasApi } from 'simplelogin-client';
import fetch from 'node-fetch'; // v2

const alias = new AliasApi(
  new SimpleLoginConfig({
    apiKey: process.env.API_KEY,
    fetchApi: fetch, // <-- insert fetch API
  }),
);
```

Same for [outdated browsers that do not support `fetch`](https://caniuse.com/fetch) with alternatives like [`whatwg-fetch`](https://github.com/github/fetch).

## Can I use the OpenAPI Spec to generate clients for other languages?

Yes of course! Check the [license](../LICENSE) for conditions under which this code can be used.

## What's the current project state?

The client is still under heavy development. But that shouldn't scare you from already using it. It's just a dumb REST client and the alias management through the client already works very well.

Still you may stumble upon bugs, wrongly configured requests, etc. The development mainly affects missing functionality to be support everything the upstream API can do. During the v0.\* versions you may even expect breaking changes in the client's API.

Please be so kind to [report any issues](https://github.com/KennethWussmann/simplelogin-client/issues) or even [contribute fixes](./development.md).
