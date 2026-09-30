<script setup lang="ts">
defineProps<{ announcement: string }>();
</script>

<template>
  <div class="announcement">
    <span class="desktop-only">
      CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) &nbsp; ·
      &nbsp;
    </span>
    {{ announcement }}
    <span class="desktop-only">&nbsp; · &nbsp; easy 45 day return window.</span>
  </div>
  <header class="header wrap">
    <a href="#" aria-label="Byteex home">
      <img src="/images/logo.png" alt="BYTEEX" width="200" height="36" />
    </a>
  </header>
</template>
