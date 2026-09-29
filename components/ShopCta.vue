<script setup lang="ts">
withDefaults(defineProps<{ label?: string; rating?: boolean }>(), {
  label: "Customize Your Outfit",
  rating: false,
});
</script>
<template>
  <div class="cta-group">
    <a class="button" href="#collection"
      >{{ label }} <span aria-hidden="true">⟶</span></a
    >
    <div v-if="rating" class="rating-line">
      <span class="stars" aria-label="5 out of 5 stars">★★★★★</span
      ><span>Over 500+ 5 Star Reviews Online</span>
    </div>
  </div>
</template>
