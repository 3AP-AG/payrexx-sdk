import 'dotenv/config';

const clientConfig = {
  instance: process.env.INSTANCE || '',
  secret: process.env.SECRET || '',
};

export default clientConfig;
