<script setup lang="ts">
import type { PageContent } from "~/types/content";

defineProps<
  Pick<PageContent, "finalTitle" | "finalText" | "finalImage" | "ctaLabel">
>();
</script>

<template>
  <section class="closing">
    <h2>{{ finalTitle }}</h2>
    <p>{{ finalText }}</p>
    <img
      class="closing-art"
      :src="finalImage"
      alt="Find your favourite lounge set"
      width="640"
      height="389"
      loading="lazy"
    />
    <ShopCta :label="ctaLabel" rating />
    <div class="closing-promises desktop-only">
      <span>
        <BrandIcon name="truck" />
        FREE Shipping on
        <br />
        Orders over $200
      </span>
      <span>
        <BrandIcon name="cloud" />
        Over 500+ 5 Star
        <br />
        Reviews Online
      </span>
      <span>
        <BrandIcon name="leaf" />
        Made ethically
        <br />
        and responsibly.
      </span>
    </div>
  </section>
</template>
