<script setup lang="ts">
import type { PageContent } from "~/types/content";

defineProps<
  Pick<PageContent, "storyTitle" | "storyImage" | "story" | "ctaLabel">
>();
</script>

<template>
  <section class="story">
    <div class="wrap story-grid">
      <h2>{{ storyTitle }}</h2>
      <img
        class="story-art"
        :src="storyImage"
        alt="Comfortable mornings, in your own rhythm"
        width="558"
        height="664"
        loading="lazy"
      />
      <div class="story-copy">
        <p v-for="paragraph in story" :key="paragraph">
          {{ paragraph }}
        </p>
        <ShopCta class="desktop-only" :label="ctaLabel" />
      </div>
    </div>
  </section>
</template>
