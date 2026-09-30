<script setup lang="ts">
import { fallbackPage } from "~/data/page";

const { data } = await useFetch("/api/page");
const page = computed(() => data.value?.page ?? fallbackPage);
</script>

<template>
  <div>
    <a class="skip-link" href="#main">Skip to content</a>
    <SiteHeader :announcement="page.announcement" />
    <main id="main">
      <LandingHero
        :title="page.title"
        :hero-images="page.heroImages"
        :hero-benefits="page.heroBenefits"
        :cta-label="page.ctaLabel"
        :reviews="page.reviews"

      />
      <LandingPress />
      <LandingBenefits
        :benefits-title="page.benefitsTitle"
        :gallery="page.gallery"
        :benefits="page.benefits"
        :cta-label="page.ctaLabel"
      />
      <LandingStory
        :story-title="page.storyTitle"
        :story-image="page.storyImage"
        :story="page.story"
        :cta-label="page.ctaLabel"
      />
      <LandingSteps :steps="page.steps" :cta-label="page.ctaLabel" />
      <LandingReviews :reviews="page.reviews" :cta-label="page.ctaLabel" />
      <LandingFaq :faqs="page.faqs" :cta-label="page.ctaLabel" />
      <LandingImpact :impact="page.impact" />
      <LandingClosing
        :final-title="page.finalTitle"
        :final-text="page.finalText"
        :final-image="page.finalImage"
        :cta-label="page.ctaLabel"
      />
    </main>
  </div>
</template>
