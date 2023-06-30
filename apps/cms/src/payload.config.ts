import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';

export default buildConfig({
  serverURL: `http://localhost:${process.env.PAYLOAD_PUBLIC_PORT}`,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
