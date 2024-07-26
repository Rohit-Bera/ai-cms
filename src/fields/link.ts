import { Field } from "payload/types";
import { Type as PageType } from "../collections/Pages";

export type Type = {
    type: 'page' | 'custom'
    label: string
    Page?: PageType 
    url?: string
}

export const link: Field = {
  name: "link",
  type: "group",
  fields: [
    {
      name: "type",
      type: "radio",
      defaultValue: "page",
      options: [
        {
          label: "Page",
          value: "page",
        },
        {
          label: "Custom URL",
          value: "custom",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
          admin: {
            width: '50%',
          }
        },
        {
          name: "page",
          label: "Link to Page",
          type: "relationship",
          relationTo: "pages",
          required: true,
          // (data , siblingData) => {}
          // data is the entire data from the top to bottom
          // sibling data is the nearby data.
          admin: {
            condition: (_, siblingData) => siblingData?.type === "page",
            width: '50%',
          },
        },
        {
          name: "url",
          label: "custom URL",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === "custom",
            width: '50%',
          },
        },
      ],
    },
  ],
};
