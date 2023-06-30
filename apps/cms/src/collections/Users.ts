import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    }
  ],
};

export default Users;