<script setup lang="ts">
import type { PageContent } from "~/types/content";

defineProps<
  Pick<PageContent, "benefitsTitle" | "gallery" | "benefits" | "ctaLabel">
>();
</script>

<template>
  <section class="benefits wrap" aria-labelledby="benefits-title">
    <h2 id="benefits-title">{{ benefitsTitle }}</h2>
    <ProductGallery :items="gallery" />
    <div class="benefit-list">
      <article v-for="item in benefits" :key="item.title" class="benefit">
        <span class="icon-disc"><BrandIcon :name="item.icon" /></span>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </article>
    </div>
    <ShopCta class="mobile-only" :label="ctaLabel" rating />
  </section>
</template>
