import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: isAdmin,
    // create: isAdmin,
    // update: isAdmin,
    // delete: isAdmin,
  },
  upload: {
    staticDir: "media",
    staticURL: "/media",
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
