import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'
import { CollectionConfig } from 'payload/types'
import { isLoggedIn } from '../access/isLoggedIn'

// isAdmin = checks whether the user is admin or normal user.
// isAdminFieldLevel = meaning only admin can access this field.
// isAdminOrSelf = meaning returns admin or user i.e only admin can edit and delete all the users , but the user can edit only themselves.

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    // This property controls how deeply "populated"
    // relationship docs are that are stored in the req.user.
    // It should be kept to as low as possible, which 
    // keeps performance fast.
    depth: 0
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    // admin can edit all the users , but the user can edit only themselves.
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name:'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
        {
          label: 'Other',
          value: 'other'
        }
      ]
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      defaultValue: ['editor','user'],
      hasMany: true,
      saveToJWT: true,
      access: {
        read: isAdminFieldLevel,
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        // when user wants to edit the ai...
        {
          label: 'Editor',
          value: 'editor',
        },
        // when user is using ai...
        {
          label: 'User',
          value: 'user',
        }
      ]
    },
    {
      name: 'avatar',
      label: 'Users Avatar',
      type: 'relationship',
      relationTo: 'avatar',
    }
  ],
}

export default Users
