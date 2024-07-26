// avatar which is assigjned to user.
// preference set by user for the avatar
import { isAdmin, isAdminFieldLevel } from "../access/isAdmin";
import { CollectionConfig } from "payload/types";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Avatar : CollectionConfig = {
    slug: 'avatar',
    labels: {
        singular: 'Avatar',
        plural: 'Avatars',
    },
    access: {
        read: isAdminOrSelf, 
        create: isAdminOrSelf,
        update: isAdminOrSelf,
        delete: isAdminOrSelf,
    },
    fields: [
        {
            name: 'avatarName',
            label: 'Avatar Name',
            type: 'text',
            required: true,
        },
        {
            name: 'avatarGender',
            label: 'Avatar Gender',
            type: 'select',
            options: [
                {
                    label: 'Male',
                    value: 'male',
                },
                {
                    label: 'Female',
                    value: 'female',
                }
            ]
        },
        {
            name: 'avatarBehavior',
            label: 'Avatar Behavior',
            type: 'textarea',
            required: true,
        },
        {
            name: 'avatarFile',
            label: 'Avatar File',
            // required: true,
            type: 'upload',
            relationTo: 'media',
        },
    ]
}

export default Avatar