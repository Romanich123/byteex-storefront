import { createClient } from "@sanity/client";
import { fallbackPage } from "../../data/page";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  if (!config.sanityProjectId) return { page: fallbackPage, source: "local" };
  try {
    const client = createClient({
      projectId: config.sanityProjectId,
      dataset: config.sanityDataset,
      token: config.sanityReadToken || undefined,
      apiVersion: "2026-09-29",
      useCdn: !config.sanityReadToken,
    });
    const content = await client.fetch(
      `*[_type == "landingPage"][0]{
      title, announcement, ctaLabel, "heroImages": heroImages[].asset->url,
      heroBenefits, benefitsTitle, benefits,
      "gallery": gallery[]{name, "image": image.asset->url},
      storyTitle, "storyImage": storyImage.asset->url, story, steps, reviews, faqs, impact,
      finalTitle, finalText, "finalImage": finalImage.asset->url
    }`,
      {},
      { timeout: 5000 },
    );
    if (!content) return { page: fallbackPage, source: "local" };
    const populated = Object.fromEntries(
      Object.entries(content).filter(
        ([, value]) =>
          value != null && (!Array.isArray(value) || value.length > 0),
      ),
    );
    return { page: { ...fallbackPage, ...populated }, source: "sanity" };
  } catch {
    console.error(
      "[Sanity] Content request failed; serving local design content.",
    );
    return { page: fallbackPage, source: "fallback" };
  }
});
