// chats between user and ai encrypted
import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Chat : CollectionConfig = {
    slug: 'chat',
    labels: {
        singular: 'User Chat History',
        plural: 'User Chats History',
    },
    access: {
        read: isAdmin,
        // create: isAdminOrSelf,
        // update: isAdminOrSelf,
        // delete: isAdminOrSelf,
    },
    fields: [
        {
            name: 'chat',
            type: 'array',
            fields: [
                {
                    label: 'User',
                    name: 'user',
                    type: 'text',
                    required: true,
                },
                {
                    label: 'Avatar',
                    name: 'avatar',
                    type: 'text',
                    required: true
                },
            ],
        },
        // {
        //     name: 'user',
        //     type: 'relationship',
        //     relationTo: 'user',
        // },
        // {
        //     name: 'avatar',
        //     type: 'relationship',
        //     relationTo: 'avatar',
        // }
    ]
}

export default Chat