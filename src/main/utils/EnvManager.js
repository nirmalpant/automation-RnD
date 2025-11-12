
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env/.env') });

export const EnvManager = {
  url: process.env.URL,
  email: process.env.EMAIL,
  password: process.env.PASSWORD
};
