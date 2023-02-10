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

## Can I use the OpenAPI Spec to generate clients for other languages?

Yes of course! Check the [license](../LICENSE) for conditions under which this code can be used.
