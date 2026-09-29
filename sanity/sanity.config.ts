import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { landingPage } from "./schemaTypes/landingPage";

export default defineConfig({
  name: "byteex",
  title: "Byteex Content Studio",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "replace-me",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [structureTool()],
  schema: { types: [landingPage] },
});
