# FAQ

## Can the client be used for selfhosted installations of SimpleLogin?

Yes, the used API url can be adjusted when constructing the client:

```typescript
import { SimpleLogin } from 'simplelogin-client';

const alias = new SimpleLogin.AliasApi(
  {
    apiKey: process.env.API_KEY,
  },
  'https://app.my-selfhosted-simplelogin.io/api', // <-- change me
);
```

> Check the [docs](https://kennethwussmann.github.io/simplelogin-client/typedoc/classes/SimpleLogin.BaseAPI.html#constructor) for more information.

## What NodeJS version and browsers are supported?

This client is developed for NodeJS 18 and modern browsers.
It can run in most NodeJS versions and most browsers as well with a third-party `fetch` API.

It does not require any dependencies by default when used in enviroments where a global `fetch` API is available. This is the case for NodeJS 18 and modern browsers.

In case you want to use the client with older versions of NodeJS you may need to install a third-party `fetch` compliant library like [`node-fetch`](https://www.npmjs.com/package/node-fetch). You then just pass the `fetch` HTTP client into the API client:

```typescript
import { SimpleLogin } from 'simplelogin-client';
import fetch from 'node-fetch'; // v2

const alias = new SimpleLogin.AliasApi(
  {
    apiKey: process.env.API_KEY,
  },
  undefined,
  fetch, // <-- insert fetch API
);
```

Same for [outdated browsers that do not support `fetch`](https://caniuse.com/fetch) with alternatives like [`whatwg-fetch`](https://github.com/github/fetch).

## Can I use the OpenAPI Spec to generate clients for other languages?

Yes of course! Check the [license](../LICENSE) for conditions under which this code can be used.
