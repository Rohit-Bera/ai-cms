import { GlobalConfig } from "payload/types";
import { link } from "../fields/link";

const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "nav",
      label: "navigation",
      type: "array",
      fields: [link],
    },
  ],
};

export default Footer;
