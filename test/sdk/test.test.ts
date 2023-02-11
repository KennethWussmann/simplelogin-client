import { aliasApi, expectOperation } from '../utils';

describe('test', () => {
  it('test', async () => {
    const response = await aliasApi.createRandom({});

    expect(response).toMatchInlineSnapshot();

    await expectOperation('createRandom');
  });
});
