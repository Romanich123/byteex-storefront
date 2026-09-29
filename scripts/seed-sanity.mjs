/** Run with Node >= 22 and SANITY_WRITE_TOKEN after configuring .env. */
import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { fallbackPage } from "../data/page.ts";
const {
  NUXT_SANITY_PROJECT_ID: projectId,
  NUXT_SANITY_DATASET: dataset = "production",
  SANITY_WRITE_TOKEN: token,
} = process.env;
if (!projectId || !token)
  throw new Error(
    "Set NUXT_SANITY_PROJECT_ID and SANITY_WRITE_TOKEN. Never commit the token.",
  );
const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-09-29",
  useCdn: false,
});
if (await client.getDocument("byteex-landing-page"))
  throw new Error(
    "Landing page already exists. Edit it in Studio; this script will not overwrite it.",
  );
const cache = new Map();
async function upload(path) {
  if (!cache.has(path)) {
    const asset = await client.assets.upload(
      "image",
      await readFile(fileURLToPath(new URL(`../public${path}`, import.meta.url))),
      { filename: path.split("/").at(-1) },
    );
    cache.set(path, {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
    });
  }
  return structuredClone(cache.get(path));
}
const page = structuredClone(fallbackPage);
page.heroImages = await Promise.all(
  page.heroImages.map(async (path, i) => ({
    ...(await upload(path)),
    _key: `hero-${i}`,
  })),
);
page.gallery = await Promise.all(
  page.gallery.map(async (item, i) => ({
    ...item,
    _type: "object",
    _key: `outfit-${i}`,
    image: await upload(item.image),
  })),
);
page.storyImage = await upload(page.storyImage);
page.finalImage = await upload(page.finalImage);
for (const field of ["benefits", "steps", "reviews", "faqs", "impact"])
  page[field] = page[field].map((item, i) => ({
    ...item,
    _type: "object",
    _key: `${field}-${i}`,
  }));
await client.create({
  _id: "byteex-landing-page",
  _type: "landingPage",
  ...page,
});
console.log(
  "Byteex page and images imported. Open Sanity Studio to edit content.",
);
