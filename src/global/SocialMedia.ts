import { GlobalConfig } from "payload/types";
import { isAdminOrSelf, isAdminOrSelfFieldLevel } from "../access/isAdminOrSelf";

const SocialMedia: GlobalConfig = {
  slug: "social-media",
  label: 'Social Media',
  access:{
    read: isAdminOrSelfFieldLevel,
    update: isAdminOrSelfFieldLevel,
  },
  fields: [
    {
      name: "socialLinks",
      type: "array",
      labels: {
        singular:'link',
        plural: 'links',
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "label",
              label: "Label",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "url",
              label: "URL",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
    },
  ],
};

export default SocialMedia;
