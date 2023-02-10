import { SimpleLogin } from './';
import { config } from 'dotenv';

config();

const run = async () => {
  const aliases = new SimpleLogin.AliasApi({
    apiKey: process.env.API_KEY,
  });

  try {
    const response = await aliases._delete(5779636);
    console.log('Success', response);
  } catch (error: any) {
    console.log('Error', error);
  }
};

run().catch(console.error);
