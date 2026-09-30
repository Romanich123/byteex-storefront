<script setup lang="ts">
import type { PageContent } from "~/types/content";

defineProps<Pick<PageContent, "impact">>();
</script>

<template>
  <section class="impact">
    <h2>Our total green impact</h2>
    <div class="impact-items">
      <div v-for="item in impact" :key="item.label">
        <BrandIcon :name="item.icon" />
        <strong>{{ item.value }}</strong>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </section>
</template>
