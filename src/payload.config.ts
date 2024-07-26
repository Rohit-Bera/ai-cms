import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import { Seed } from "./seed";
import Avatar from "./collections/Avatar";
import AvatarVoice from "./collections/AvatarVoice";
import Media from "./collections/Media";
import Page from "./collections/Pages";
import Chat from "./collections/Chat";
import MegaMenu from "./global/MegaMenu";
import Footer from "./global/Footer";
import SocialMedia from "./global/SocialMedia";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users , Avatar, AvatarVoice ,Chat , Media , Page ],
  globals: [MegaMenu , Footer , SocialMedia],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  onInit: async (payload) => {
    // await Seed(payload);
  },
});
