<script setup lang="ts">
const activeLogo = ref(0);
const logos = [
  { file: "eco-stylist", name: "Eco-Stylist" },
  { file: "canadian-living", name: "Canadian Living" },
  { file: "jillian-harris", name: "Jillian Harris" },
  { file: "eco-hub", name: "The Eco Hub" },
  { file: "trendhunter", name: "Trendhunter" },
];
</script>

<template>
  <section class="press" aria-label="As seen in">
    <div class="wrap">
      <p>as seen in</p>
      <div class="press-logos">
        <img
          v-for="(logo, i) in logos"
          :key="logo.file"
          :class="{ 'mobile-hidden': i < activeLogo || i > activeLogo + 2 }"
          :src="`/images/${logo.file}.webp`"
          :alt="logo.name"
          width="190"
          height="52"
          loading="lazy"
        />
      </div>
      <div class="dots mobile-only">
        <button
          v-for="i in 3"
          :key="i"
          :class="{ active: activeLogo === i - 1 }"
          :aria-label="`Show press logos ${i}`"
          :aria-pressed="activeLogo === i - 1"
          @click="activeLogo = i - 1"
        />
      </div>
    </div>
  </section>
</template>
