import { isAdmin } from "../access/isAdmin";
import { isAdminOrHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";
import { isAdminOrHasSiteAccess } from "../access/isAdminOrHasSiteAccess";
import { CollectionConfig } from "payload/types";

// this page is basically for user or visitor pages.

const Pages : CollectionConfig = {
    slug:'pages',
    labels: {
        singular: 'Web Page',
        plural: 'Web Pages',
    },
    // to enable _status for published | Draft
    versions: {
        drafts: true,
    },
    access: {
        read: isAdmin,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    fields: [
        {
            label: 'Page Name',
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            label: 'Slug',
            name: 'slug',
            type: 'text',
            required: true,
            admin: {
                position: 'sidebar',
            }
        },
        {
            label: 'Layout',
            name: 'layout',
            type: 'blocks',
            blocks: []
        }
    ]
}

export default Pages