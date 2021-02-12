import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from "@keystone-next/auth";
import { statelessSessions, withItemData } from "@keystone-next/keystone/session";
import { Product } from "./schemas/Product";
import { User } from "./schemas/User";
import { ProductImage } from "./schemas/ProductImage";

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: (60 * 60 * 24 * 360),
  secret: process.env.COOKIE_SECRET
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add init roles
  }
});

export default withAuth(
  config({
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
      User,
      Product,
      ProductImage,
    }),
    ui: {
      // TODO: change for roles
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id`
    })
  })
)