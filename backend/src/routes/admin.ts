import AdminJS from 'adminjs';

import AdminJSExpress from '@adminjs/express';
import { Database, getModelByName, Resource } from '@adminjs/prisma';

// import { Prisma, PrismaClient } from '@prisma/client';
import { PrismaClient } from '../generated/prisma/client.js';

const prismaClient = new PrismaClient();

AdminJS.registerAdapter({ Database, Resource });

const adminJs = new AdminJS({
  resources: [
    {
      resource: {
        model: getModelByName("Category"),
        client: prismaClient,
      },
      options: {},
    },
    {
      resource: {
        model: getModelByName("Business"),
        client: prismaClient,
      },
      options: {},
    },
    {
      resource: {
        model: getModelByName("Address"),
        client: prismaClient,
      },
      options: {},
    },
    {
      resource: {
        model: getModelByName("User"),
        client: prismaClient,
      },
      options: {},
    },
  ],
  rootPath: "/admin",
});

const router = AdminJSExpress.buildRouter(adminJs);

export { adminJs, router };
