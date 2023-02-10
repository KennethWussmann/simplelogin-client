import { SimpleLogin } from './';
import { config } from 'dotenv';

config();

const run = async () => {
  const alias = new SimpleLogin.AliasApi({
    apiKey: process.env.API_KEY,
  });
  const createdAlias = await alias.createRandom({
    note: 'This alias was created with simplelogin-client!',
  });
  console.log(createdAlias);
};

run().catch(console.error);
