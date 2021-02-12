import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: add seeding
  },
  lists: createSchema({
    // TODO: add schema items
  }),
  ui: {
    // TODO: change for roles
    isAccessAllowed: _ => true,
  },
  // TODO: add sesh vals here
});
