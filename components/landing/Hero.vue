<script setup lang="ts">
import type { PageContent } from "~/types/content";

defineProps<
  Pick<
    PageContent,
    "title" | "heroImages" | "heroBenefits" | "ctaLabel" | "reviews"
  >
>();
const imageDescriptions = [
  "Soft grey lounge set",
  "Comfortable white robe",
  "Relaxing in everyday essentials",
];
const benefitIcons = ["sun", "cart", "waves"];
</script>

<template>
  <section class="hero wrap" aria-labelledby="hero-title">
    <h1 id="hero-title">{{ title }}</h1>

    <div class="hero-art" aria-label="Everyday loungewear collection">
      <img
        v-for="(src, i) in heroImages"
        :key="src"
        :src="src"
        :alt="imageDescriptions[i] || 'Byteex loungewear'"
        :class="`hero-photo photo-${i}`"
        :fetchpriority="i === 1 ? 'high' : 'auto'"
        width="430"
        height="650"
      />
    </div>
    <ul class="hero-benefits">
      <li v-for="(text, i) in heroBenefits" :key="text">
        <span class="icon-disc">
          <BrandIcon :name="benefitIcons[i] || 'leaf'" />
        </span>
        <span>{{ text }}</span>
      </li>
    </ul>
    <ShopCta class="hero-cta" :label="ctaLabel" />
    <div class="hero-review">
      <div class="review-person">
        <img src="/images/avatar.webp" alt="" width="39" height="39" />
        <div>
          <span class="review-name">Jane, S.</span>
          <span class="stars" aria-label="5 out of 5 stars">★★★★★</span>
          <span class="review-count">One of 500+ 5 Star Reviews Online</span>
        </div>
      </div>
      <p>{{ reviews[0]?.text }}</p>
    </div>
  </section>
</template>
