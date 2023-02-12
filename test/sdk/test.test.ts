import { SimpleLogin } from '../../src';

describe('test', () => {
  it('should work', async () => {
    const api = new SimpleLogin.AliasApi();
    await api.createRandomAlias({
      aliasRandomNewPost: {
        note: 'test',
      },
    });
  });
});
