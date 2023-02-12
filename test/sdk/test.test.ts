import { SimpleLogin } from '../../src';
import { ServerConfiguration } from '../../src/sdk';

describe('test', () => {
  it('should work', () => {
    const api = new SimpleLogin.AliasApi({
      baseServer: new ServerConfiguration('', {}),
      authMethods: {},
      httpApi: fetch as any,
      middleware: [],
    });
  });
});
