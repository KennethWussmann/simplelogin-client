import { SimpleLogin } from './';

const run = async () => {
  const api = new SimpleLogin.AccountApi({
    apiKey: 'test',
  });

  const response = await api.forgotPassword({
    email: 'kenneth@wussmann.net',
  });
  console.log(JSON.stringify(response, null, 2));

  new SimpleLogin.AliasApi().createRandom({}, undefined, '');

  //const mfaResponse = await api.mfa({
  //  device: device,
  //  mfaKey: loginResponse.mfaKey,
  //  mfaToken: "",
  //});
  //console.log(mfaResponse);
};

run().catch(console.error);
