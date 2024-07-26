// avatar which is assigjned to user.
// preference set by user for the avatar
import { CollectionConfig } from "payload/types";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const AvatarVoice : CollectionConfig = {
    slug: 'avatarVoice',
    labels: {
        singular: 'AvatarVoice',
        plural: 'AvatarVoices',
    },
    access: {
        read: isAdminOrSelf,
        create: isAdminOrSelf,
        delete: isAdminOrSelf,
        update: isAdminOrSelf,
    },
    fields: [
        {
            name: 'avatarName',
            label: 'Avatar Name',
            type: 'text',
            required: true,
        },
        {
            name: 'avatarLang',
            label: 'Avatar Language',
            type: 'text',
        },
        {
            name:'avatarPitch',
            label: 'Avatar Pitch',
            type: 'radio',
            admin: {
                layout: 'horizontal',
            },
            options: [
                {
                    label: 'Low',
                    value: 'low'
                },
                {
                    label: 'Medium',
                    value: 'medium',
                },
                {
                    label: 'High',
                    value: 'high',
                }
            ]
        },
        {
            name: 'avatarVoice',
            label: 'Avatar Voice',
            type: 'text',
            required: true,
        },
        {
            name: 'avatarVolume',
            label: 'Avatar Volume',
            type: 'text',
            required: true,
        },
        {
            name: 'avatarAgeGroup',
            label: 'Avatar Age Group',
            type: 'radio',
            options: [
                {
                    label: 'Young',
                    value: 'young'
                },
                {
                    label: 'Mid',
                    value: 'mid',
                },
                {
                    label: 'Old',
                    value: 'old',
                }
            ]
        },
        {
            name: 'avatar',
            label: 'Avatar',
            hasMany: true,
            type: 'relationship',
            relationTo: 'avatar',
        },
        {
            name: 'customVoice',
            type: 'upload',
            relationTo: 'media',
            label: 'custom voice',
        }
    ]
}

export default AvatarVoice